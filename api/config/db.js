const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:adminpw@localhost:5433/wknd')

module.exports = db