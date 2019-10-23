const express = require('express')
const router = express.Router()
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
    const post = req.body

    Post.create(post)
        .then(post => res.redirect('/posts'))
        .catch(err => console.log(err))
})

module.exports = router