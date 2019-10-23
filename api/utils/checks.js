const Group = require('../models/Group')
const User = require('../models/User')

const group = (id, name) => Group.findAll({ where: {id, name} })

const user = (username) => User.findAll({ where: {username} })

module.exports = {
    group,
    user
}