const Sequelize = require('sequelize')
const db = require('../config/db')
const Comment = require('./Comment')

const Post = db.define('post', {
    text: {
        type: Sequelize.STRING
    },
    day: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.TIME
    },
    updatedAt: {
        type: Sequelize.TIME
    }
})

Post.hasMany(Comment, {foreignKey: 'post_id'})
Comment.belongsTo(Post, {foreignKey: 'post_id'})

module.exports = Post