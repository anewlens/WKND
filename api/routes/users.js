const express = require('express')
const router = express.Router()
const encryption = require('../utils/encryption')
const User = require('../models/User')

router.get('/', (req, res) => 
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
)

router.post('/', (req, res) => {
    const username = req.body
    console.log('USERNAME', username)
    return User.findAll({where: username})
        .then(users => {
            users.length
            ? res.status(200).send('taken')
            : res.status(200).send('not taken')
        })
})

router.post('/add', async (req, res) => {
    const {name, username, password, group_id} = req.body
    const password_hash = await encryption.hashPW(password)

    const userData = { name, username, password_hash, group_id}

    User.create(userData)
        .then(({dataValues: {id, username, group_id}}) => {
            const token = encryption.signToken(username, id, group_id)

            return res.status(201).send({token, id, username, name, group_id})
        })
        .catch(err => console.log(err))
})

module.exports = router