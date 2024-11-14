const { sequelize, DataTypes } = require("../../config/db");


const users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    c_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
}, {
    tableName: "users"
});

module.exports = users;