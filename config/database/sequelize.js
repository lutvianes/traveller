const secret = require('../secrets').db;

module.exports = {
    "development": {
        "username": secret.username,
        "password": secret.password,
        "database": "traveller_dev",
        "host": "127.0.0.1",
        "dialect": "mysql",
        seederStorage: "sequelize"
    },
    "test": {
        "username": secret.username,
        "password": secret.password,
        "database": "traveller_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        seederStorage: "sequelize"
    },
    "production": {
        "username": secret.username,
        "password": secret.password,
        "database": "traveller",
        "host": "127.0.0.1",
        "dialect": "mysql",
        seederStorage: "sequelize"
    }
}
