const Sequelize = require('sequelize')
const db = require('../config/db')
const Post = require('./Post') 
const Comment = require('./Comment')

const User = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password_hash: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

User.hasMany(Post, {foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Comment, {foreignKey: 'user_id'})
Comment.belongsTo(User, {foreignKey: 'user_id'})

module.exports = User