const Sequelize = require('sequelize')
const db = require('../config/db')

const Comment = db.define('comment', {
    text: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    post_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    }
})

module.exports = Comment