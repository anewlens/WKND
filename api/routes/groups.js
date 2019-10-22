const express = require('express')
const router = express.Router()
const db = require('../config/db')
const Group = require('../models/Group')

router.get('/', (req, res) => 
    Group.findAll()
        .then(gigs => {
            console.log(gigs)
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
)

router.get('/add', (req, res) => {
    const name = 'Game Night'

    Group.create({
        name
    })
    .then(group => res.redirect('/groups'))
    .catch(err => console.log(err))
})

module.exports = router