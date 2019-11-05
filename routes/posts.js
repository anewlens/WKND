const express = require("express")
const router = express.Router()
const sequelize = require("sequelize")
const op = sequelize.Op
const Post = require("../models/Post")
const User = require("../models/User")
const encryption = require("../utils/encryption")

const getTokenFrom = req => {
  const authorization = req.get("authorization")
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7)
  }
  return null
}

router.get("/", (req, res) => {
  const token = getTokenFrom(req)

  const decodedToken = encryption.verifyToken(token)

  return Post.findAll({ where: { group_id: decodedToken.group_id } })
    .then(posts => {
      res.json(posts)
    })
    .catch(err => console.log(err))
})

router.get("/combined", (req, res) => {
  const token = getTokenFrom(req)

  const decodedToken = encryption.verifyToken(token)

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "Missing or incorrect token." })
  }

  return Post.findAll({
    where: {
      [op.and]: [
        sequelize.where(
          sequelize.fn("date_trunc", "week", sequelize.col("createdAt")),
          "=",
          sequelize.fn("date_trunc", "week", sequelize.fn("NOW"))
        ),
        { group_id: decodedToken.group_id }
      ]
    },
    attributes: {
      exclude: ["updatedAt", "group_id"]
    },
    include: [
      {
        model: User,
        attributes: ["name"]
      }
    ]
  })
    .then(posts => {
      return res.json(posts)
    })
    .catch(err => console.log(err))
})

router.post("/add", (req, res) => {
  const post = req.body

  Post.create(post)
    .then(post => res.status(201).send(post))
    .catch(err => console.log(err))
})

module.exports = router
