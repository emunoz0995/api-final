const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");



/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Edison Munoz
 *         email:
 *           type: string
 *           example: emunoz@hotmail.com
 *         password:
 *           type: string
 *           example: 1234Ess
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: emunoz@hotmail.com
 *         password:
 *           type: string
 *           example: 1234Ess
 *     loginResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Edison
 *         email:
 *           type: string
 *           example: emunoz@hotmail.com
 *         id:
 *           type: int
 *           example: 2
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *   securitySchemes:
 *     bearerAuth:
 *       type: bearer
 *       bearerFormat: JWT
 */

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
},	{
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
        }
    }
}
);

module.exports = Users;