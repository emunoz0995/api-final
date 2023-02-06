const { Router } = require('express');
const { register, login } = require('../controllers/auth.controller');

const router = Router();


/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     sumary: create a new user into application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/register'
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
 *                   example: user created
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not create 
 * /api/v1/auth/login:
 *   post:
 *     sumary: user sigIn
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to sigIn user
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schema/loginResponse'
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / something wrong
 */

router.post('/register', register);
router.post('/login', login)

module.exports = router;