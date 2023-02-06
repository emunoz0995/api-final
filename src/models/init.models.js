const Users = require("./users.models");
const Products = require('./products.models');
const Car = require('./car.models');
const Order = require('./orders.models');
const ProductsInCart = require('./productInCar.models');
const ProductInOrder = require('./productInOrder.models');

const initModels = () => {

  Products.belongsTo(Users,{ as: "owner", foreignKey: "user_id"});
  Users.hasMany(Products, { as: "seller", foreignKey: "user_id"});

  Car.belongsTo(Users,{ as: "buyer", foreignKey: "user_id"});
  Users.hasOne(Car, {as:'cart', foreignKey: "user_id"});

  Order.belongsTo(Users,{as: 'buyer1', foreignKey:"user_id"});
  Users.hasMany(Order, {as:"orders", foreignKey:"user_id"});

  ProductsInCart.belongsTo(Car,{as:'cart',foreignKey:'car_id'});
  ProductsInCart.belongsTo(Products,{as:'product_car', foreignKey:'product_id'});
  Car.hasMany(ProductsInCart, {as:'cart_products', foreignKey:'car_id'})
  
  ProductInOrder.belongsTo(Order,{as:'order',foreignKey:'order_id'});
  ProductInOrder.belongsTo(Products,{as:'product_order', foreignKey:'product_id'});
  Order.hasMany(ProductInOrder,{as:'order_products',foreignKey:'order_id'});

  //ProductsInCart.belongsTo(ProductInOrder,{as:'product_order', foreignKey:'product_id'});
 

};

module.exports = initModels;

