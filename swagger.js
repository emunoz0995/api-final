const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require ('dotenv').config();

const options = {
    apis: [
        "./src/routes/auth.routes.js",
        "./src/models/users.models.js",
        "./src/routes/products.routes.js",
        "./src/models/products.models.js",
        "./src/routes/cart.routes.js",
        "./src/models/productInCar.models.js",
        "./src/routes/order.routes.js",
        "./src/models/productInOrder.models.js"
    ],
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Ecomerce Api en NodeJs",
            version: "1.0.0",
            description:"API para manejo de ecommerce",

        }
    }
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) =>{
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api/v1/docs.json', (req, res) =>{
    res.setHeader({'Content-Type': 'application/json'});
    res.send(swaggerSpec)
})
console.log(`La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`)
}

module.exports = swaggerDocs;
