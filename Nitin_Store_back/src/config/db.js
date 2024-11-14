const { Sequelize, DataTypes } = require('sequelize');

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: "mysql",/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    timezone: '+05:30',
    logging: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize, DataTypes
}