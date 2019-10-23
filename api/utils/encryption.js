const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const hashPW = pw => bcrypt.hash(pw, saltRounds)

const comparePW = (pw, hashed_pw) => bcrypt.compare(pw, hashed_pw)

const signToken = (username, id) => 
    jwt.sign({username, id}, process.env.TOKEN_SECRET)

module.exports = {hashPW, comparePW, signToken}