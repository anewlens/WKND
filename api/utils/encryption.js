const bcrypt = require('bcrypt')
const crypto = require('crypto')
const saltRounds = 10

const hashPW = pw => bcrypt.hash(pw, saltRounds)

const comparePW = pw => bcrypt.compare(pw, saltRounds)

const createToken = async () => {
    const token = await crypto.randomBytes(16, (err, data) => {
        err ? err : data.toString('base64')
    })

    return token
}

module.exports = {hashPW, comparePW, createToken}