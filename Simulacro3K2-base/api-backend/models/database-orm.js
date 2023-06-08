

const Sequelize = require('sequelize')
const playersModels = require('./players.js')

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : 'databaseFile.db'
})

sequelize.define(
    "players",
    playersModels.playersAtrributs,
    playersModels.playersOptions
)

module.exports = sequelize