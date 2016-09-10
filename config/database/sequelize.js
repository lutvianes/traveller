const secret = require('../secrets').db;

module.exports = {
    "development": {
        "username": process.env.TRAVELLER_DB_USERNAME,
        "password": process.env.TRAVELLER_DB_PASSWORD,
        "database": process.env.TRAVELLER_DB_DATABASE,
        "host": process.env.TRAVELLER_DB_HOST,
        "dialect": "mysql",
        seederStorage: "sequelize"
    },
    "test": {
        "username": process.env.TRAVELLER_DB_USERNAME,
        "password": process.env.TRAVELLER_DB_PASSWORD,
        "database": process.env.TRAVELLER_DB_DATABASE,
        "host": process.env.TRAVELLER_DB_HOST,
        "dialect": "mysql",
        "logging": false,
        "force": true,
        seederStorage: "sequelize"
    },
    "production": {
        "username": process.env.TRAVELLER_DB_USERNAME,
        "password": process.env.TRAVELLER_DB_PASSWORD,
        "database": process.env.TRAVELLER_DB_DATABASE,
        "host": process.env.TRAVELLER_DB_HOST,
        "dialect": "mysql",
        seederStorage: "sequelize"
    }
}
