const { Router } = require('express');
const {
    getAllProductsInCar,
    addProductToCart,
    
}  = require ('../controllers/cart.controllers');

const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     sumary: Add product in the cart of user
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart id
 *     requestBody:
 *       description: user adds a product to his cart
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/addProductInCar'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: added product
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not added
 * /api/v1/cart/{id}/user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     sumary: Products in the cart of user
 *     tags:
 *       - Cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: Get all products in cart of user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getAllProductsInCar'
 */


router.post('/cart/:id',authMiddleware, addProductToCart);
router.get('/cart/:id/user',authMiddleware, getAllProductsInCar);


module.exports = router;