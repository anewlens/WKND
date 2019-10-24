const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')
const User = require('../models/User')
const encryption = require('../utils/encryption')

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

router.get('/', (req, res) => 
    Comment.findAll()
        .then(comments => {
            res.json(comments)
        })
        .catch(err => console.log(err))
)

router.get('/combined', (req, res) => {
    const token = getTokenFrom(req)

    const decodedToken = encryption.verifyToken(token)

    if (!token || !decodedToken.id) {
        return res.status(401).json({error: 'Missing or incorrect token'})
    }

    return Comment.findAll({
        where: {group_id: decodedToken.group_id},
        attributes: {
            exclude: ['updatedAt', 'group_id']
        },
        include: [{
            model: User,
            attributes: ['name']
        }],
    })
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
})

router.post('/add', (req, res) => {
    const comment = req.body

    Comment.create({ ...comment })
        .then((comment) => res.redirect('/comments'))
        .catch(err => console.log(err))
})

module.exports = router