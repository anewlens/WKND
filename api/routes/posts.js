const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Post = require('../models/Post')
const User = require('../models/User')

router.get('/', (req, res) => 
    Post.findAll()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => console.log(err))
)

router.get('/combined', (req, res) => 
    Post.findAll({
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
    // const post = req.body
    const post = {
        text: 'TEST TEST TEST',
        day: 'FRI',
        user_id: 1,
        group_id: 1,
    }

    Post.create(post)
    .then(post => res.redirect('/posts'))
    .catch(err => console.log(err))
})

module.exports = router