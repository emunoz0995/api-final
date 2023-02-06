const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Car = db.define('cart', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        field:"total_price",
    },

});

module.exports = Car;