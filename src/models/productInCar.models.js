const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schema:
 *     addProductInCar:
 *       type: object
 *       properties:
 *         productId:
 *           type: int
 *           example: 4
 *         quantity:
 *           type: int
 *           example: 20
 *     getAllProductsInCar:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           example: 4
 *         totalPrice:
 *           type: int
 *           example: 20
 *         buyer:
 *           type: object
 *           properties:
 *             id:
 *               type: int
 *               example: 2
 *             username:
 *               type: stinger
 *               example: Edison Muñoz
 *         cart_products:
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
 *               product_car:
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
 *                   availableQty:
 *                     type: int
 *                     example: 11
 *                   status:
 *                     type: string
 *                     example: disponible
 *                   imgUrl:
 *                     type: string
 *                     example: https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const ProductsInCart = db.define('product_in_cars', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"car_id",
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"product_id",
    },
    price: {
        type: DataTypes.INTEGER,
       defaultValue: 0,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field:"purchased",
    },
   

});

module.exports = ProductsInCart;