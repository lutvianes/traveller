
module.exports = {
    "development": {
        "username": process.env.TRAVELLER_DB_USERNAME,
        "password": process.env.TRAVELLER_DB_PASSWORD,
        "database": process.env.TRAVELLER_DB_DATABASE,
        "host": process.env.TRAVELLER_DB_HOST,
        "socketPath": '/var/run/mysqld/mysqld.sock',
        "dialect": "mysql",
        seederStorage: "sequelize"
    },
    "test": {
        "username": process.env.TRAVELLER_DB_USERNAME,
        "password": process.env.TRAVELLER_DB_PASSWORD,
        "database": process.env.TRAVELLER_DB_DATABASE,
        "host": process.env.MYSQL_PORT_3306_TCP_ADDR,
        "socketPath": '/var/run/mysqld/mysqld.sock',
        "dialect": "mysql",
        "logging": false,
        "force": true,
        seederStorage: "sequelize"
    },
    "production": {
        "username": process.env.MYSQL_ENV_MYSQL_USER,
        "password": process.env.MYSQL_ENV_MYSQL_PASSWORD,
        "database": process.env.MYSQL_ENV_MYSQL_DATABASE,
        "host": process.env.MYSQL_PORT_3306_TCP_ADDR,
        "socketPath": '/var/run/mysqld/mysqld.sock',
        "dialect": "mysql",
        seederStorage: "sequelize"
    }
}
