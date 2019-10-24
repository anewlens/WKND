const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const hashPW = pw => bcrypt.hash(pw, saltRounds)

const comparePW = (pw, hashed_pw='nohash') => bcrypt.compare(pw, hashed_pw)

const signToken = (username, id, group_id) => 
    jwt.sign({username, id, group_id}, process.env.TOKEN_SECRET)

const verifyToken = token => jwt.verify(token, process.env.TOKEN_SECRET)

module.exports = {hashPW, comparePW, signToken, verifyToken}