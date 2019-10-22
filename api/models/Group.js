const Sequelize = require('sequelize')
const db = require('../config/db')
const User = require('../models/User') 
const Post = require('../models/Post')  

const Group = db.define('group', {
    name: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

Group.hasMany(Post, {foreignKey: 'group_id'})
Post.belongsTo(Group, {foreignKey: 'group_id'})
Group.hasMany(User, {foreignKey: 'group_id'})
User.belongsTo(Group, {foreignKey: 'group_id'})

module.exports = Group