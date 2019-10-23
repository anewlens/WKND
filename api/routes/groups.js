const express = require('express')
const router = express.Router()
const Group = require('../models/Group')

router.get('/', (req, res) => 
    Group.findAll()
        .then(groups => {
            res.json(groups)
        })
        .catch(err => console.log(err))
)

router.post('/add', (req, res) => {
    const name = 'Game Night'

    Group.create({
        name
    })
    .then(group => res.redirect('/groups'))
    .catch(err => console.log(err))
})

module.exports = router