const Sequelize = require('sequelize')
const db = require('../config/db')

const Group = db.define('group', {
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

module.exports = Group