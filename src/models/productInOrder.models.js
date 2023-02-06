const db = require('../utils/database');
const { DataTypes } = require('sequelize');


/**
 * @openapi
 * components:
 *   schema:
 *     addProductInOrder:
 *       type: object
 *       properties:
 *         productId:
 *           type: array
 *           example: [1,6,4]
 *     getAllProductsInOrder:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 4
 *         totalPrice:
 *           type: int
 *           example: 20
 *         order_products:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: int
 *                 example: 2
 *               price:
 *                 type: int
 *                 example: 502
 *               quantity:
 *                 type: int
 *                 example: 2
 *               product_order:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: int
 *                     example: 4
 *                   name:
 *                     type: string
 *                     example: Laptops Asus
 *                   price:
 *                     type: int
 *                     example: 400
 *                   imgUrl:
 *                     type: string
 *                     example: https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


const ProductInOrder  = db.define('product_in_order', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"order_id",
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"product_id",
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: ' Purchased'
    },
   

});

module.exports = ProductInOrder ;