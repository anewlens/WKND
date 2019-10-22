const express = require('express')
const router = express.Router()
const db = require('../config/db')
const User = require('../models/User')

router.get('/', (req, res) => 
    User.findAll()
        .then(users => {
            console.log(users)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

router.get('/:id', (req, res) => 
        User.findAll()
            .then(users => {
                console.log(users)
                res.sendStatus(200)
            })
            .catch(err => console.log(err))
)

router.get('/add', (req, res) => {
    const data = {
        username: 'admin',
        password_hash: 'adminpw',
        name: 'Robbie',
        group_id: 1
    }

    User.create({
        ...data
    })
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err))
})

module.exports = router