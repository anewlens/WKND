const Group = require('../models/Group')
const User = require('../models/User')

const group = (id, name) => Group.findAll({ where: {id, name} })

const user = (username) => 
    User.findAll({ where: {username} })
        .then(data => data.length == 0 ? data : data[0].dataValues)

module.exports = {
    group,
    user
}