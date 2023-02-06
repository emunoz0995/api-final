const { Router } = require('express');
const {
    getAllProducts,
    createProduct,
}  = require ('../controllers/products.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     sumary: Get all paroducts whose
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Get all products whose quantity is greater than 0
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/getProducts'
 * /api/v1/products/user/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     sumary: Create new product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     requestBody:
 *       description: user creates product for sale
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/createProduct'
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
 *                   example: product created
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not create
 */

router.get('/products', getAllProducts);
router.post('/products/user/:id', authMiddleware, createProduct);


module.exports = router;