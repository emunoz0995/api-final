const Products = require('../models/products.models');
// const Car = require('./models/car.models');
// const Order = require('./models/orders.models');
// const ProductsInCart = require('./models/productInCar.models');
// const ProductInOrder = require('./models/productInOrder.models');
const db = require("../utils/database");

const products = [
    {
        name:'Televisor LG 55',
        price: 55,
        availableQty: 6,
        status: 'disponible',
        userId: 1,
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg",
    },
    {
        name:'Celular Iphone 10X',
        price: 1000,
        availableQty: 3,
        status: 'disponible',
        userId: 1,
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg",
    },
    {
        name:'Play Station 5',
        price: 1500,
        availableQty: 12,
        status: 'disponible',
        userId: 2,
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg",
    },
    {
        name:'Laptop Asus Tf',
        price: 800,
        availableQty: 0,
        status: 'no disponible',
        userId: 2,
        imgUrl: "https://http2.mlstatic.com/D_NQ_NP_987961-MLA48708038405_122021-O.jpg",
    },
    
];


db.sync({force: true})

.then(() => {

    console.log('Iniciando con el sembrario malicioso');

    products.forEach((product) => Products.create(product));


});
