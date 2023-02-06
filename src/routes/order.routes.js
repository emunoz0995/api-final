const { Router } = require('express');
const {
  addProductsInOrder,
  getOrdersById,

} = require ('../controllers/order.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

/**
 * @openapi
 * /api/v1/order/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     sumary: Add products in the order of user
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart id
 *     requestBody:
 *       description: user generates the order with all the products
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/addProductInOrder'
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
 *                   example: order create
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: order not create
 * /api/v1/order/{id}/user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     sumary: Products in the cart of user
 *     tags:
 *       - Orders
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
 *               $ref: '#/components/schema/getAllProductsInOrder'
 */




router.post('/order/user/:id', authMiddleware, addProductsInOrder);
router.get('/order/:id/user',authMiddleware, getOrdersById );

module.exports = router;
