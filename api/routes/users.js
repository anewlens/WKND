const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => 
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
)

router.post('/add', (req, res) => {
    const data = req.body

    User.create(data)
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err))
})

module.exports = router