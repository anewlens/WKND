const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Post = require('../models/Post')

router.get('/', (req, res) => 
    Post.findAll()
        .then(posts => {
            console.log(posts)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

router.post('/add', (req, res) => {
    const post = req.body

    Post.create({ ...post })
    .then(post => res.redirect('/posts'))
    .catch(err => console.log(err))
})

module.exports = router