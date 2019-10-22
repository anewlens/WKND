const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Comment = require('../models/Comment')

router.get('/', (req, res) => 
    Comment.findAll()
        .then(comments => {
            console.log(comments)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

router.post('/add', (req, res) => {
    const comment = req.body

    Comment.create({ ...comment })
        .then(comment => res.redirect('/comments'))
        .catch(err => console.log(err))
})

module.exports = router