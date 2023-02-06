const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schema:
 *     getProducts:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 1
 *         name:
 *           type: string
 *           example: Televisor LG 55
 *         price:
 *           type: int
 *           example: 55
 *         availableQty:
 *           type: int
 *           example: 1
 *         status:
 *           type: string
 *           example: disponible
 *         imgUrl:
 *           type: string
 *           example: https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg
 *         owner:
 *           type: object
 *           example: {username: Agusto Pesantez }
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Televisor LG 55
 *         price:
 *           type: int
 *           example: 550
 *         availableQty:
 *           type: int
 *           example: 1
 *         status:
 *           type: string
 *           example: disponible
 *         imgUrl:
 *           type: string
 *           example: https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg
 *         userId:
 *           type: int
 *           example: 2
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */





const Products = db.define('product', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"available_qty",

    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field:"image_url",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
    },

});

module.exports = Products;