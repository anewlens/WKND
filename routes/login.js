const express = require('express')
const router = express.Router()
const encryption = require('../utils/encryption')
const check = require('../utils/checks')

router.post('/', async (req, res) => {
    try {
        const body = req.body 
        const user = await check.user(body.username)
        const pwCheck = await encryption.comparePW(body.password, user.password_hash) 
    
        if (!(user && pwCheck)) {
            return res.status(401).json({
                error: 'Invalid username or password.'
            })
        }
    
        const token = encryption.signToken(user.username, user.id, user.group_id)
        
        const { id, username, name, group_id} = user

        return res
            .status(200)
            .send({
                token, id, username, name, group_id, group_name: user.group.dataValues.name
            })
    } catch(error) {
        console.log('Error:', error)
        res.status(500).send('Server Error')
    }
})

module.exports = router