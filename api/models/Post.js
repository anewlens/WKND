const Sequelize = require('sequelize')
const db = require('../config/db')

const Post = db.define('post', {
    text: {
        type: Sequelize.STRING
    },
    day: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    group_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    }
})

module.exports = Post