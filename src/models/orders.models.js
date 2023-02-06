const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Order = db.define('order', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:"total_price",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },


});

module.exports = Order;