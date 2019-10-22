const Sequelize = require('sequelize')
const db = require('../config/db')

const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password_hash: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    group_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

module.exports = User