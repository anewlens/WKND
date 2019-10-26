const Sequelize = require('sequelize')

const db = new Sequelize(
    `postgres://${process.env.DB_UN}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
)

module.exports = db