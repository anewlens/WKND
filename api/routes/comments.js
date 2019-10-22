const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Comment = require('../models/Comment')
const User = require('../models/User')

router.get('/', (req, res) => 
    Comment.findAll()
        .then(comments => {
            res.json(comments)
        })
        .catch(err => console.log(err))
)

router.get('/combined', (req, res) => 
    Comment.findAll({
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
)

router.post('/add', (req, res) => {
    const comment = req.body

    Comment.create({ ...comment })
        .then(comment => res.redirect('/comments'))
        .catch(err => console.log(err))
})

module.exports = router