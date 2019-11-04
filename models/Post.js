const Sequelize = require("sequelize")
const db = require("../config/db")
const Comment = require("./Comment")

const Post = db.define("post", {
  text: {
    type: Sequelize.STRING
  },
  day: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
})

Post.hasMany(Comment, { foreignKey: "post_id" })
Comment.belongsTo(Post, { foreignKey: "post_id" })

module.exports = Post
