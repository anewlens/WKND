const express = require('express')
const router = express.Router()
const encryption = require('../utils/encryption')
const check = require('../utils/checks')

router.post('/', async (req, res) => {
    try {
        const body = req.body 
        const user = await check.user(body.username)
        console.log('USER', user)
        const pwCheck = await encryption.comparePW(body.password, user.password_hash) 
    
        if (!(user && pwCheck)) {
            return res.status(401).json({
                error: 'Invalid username or password.'
            })
        }
    
        const token = encryption.signToken(user.username, user.id, user.group_id)
    
        return res
            .status(200)
            .send({token, id: user.id, username: user.username, name: user.name, group_id: user.group_id})
    } catch(error) {
        console.log('Error:', error)
        res.status(500).send('Server Error')
    }
})

module.exports = router