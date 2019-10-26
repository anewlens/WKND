const express = require('express')
const router = express.Router()
const encryption = require('../utils/encryption')
const check = require('../utils/checks')
const User = require('../models/User')

router.post('/', async (req, res) => {
    try {
        const {username, name, password, groupName, group_id} = req.body
        const groupCheck = await check.group(group_id, groupName)
        const userCheck = await check.user(username)
    
        if (groupCheck.length == 0) {
            return res.status(409).send({message: 'Group does not exist.'})
        } else if (userCheck.length == 1) {
            return res.status(409).send({message: 'Username already taken'})
        }

        const password_hash = await encryption.hashPW(password)
        
        const newUser = await User.create({
            username,
            password_hash,
            name,
            group_id
        })

        const token = encryption.signToken(newUser.username, newUser.id)

        return res.status(201).send({
            token,
            un: newUser.username,
            id: newUser.id,
        })
    } catch(error) {
        console.log('Error:', error)
        res.status(500).send('Server Error')
    }
})

module.exports = router