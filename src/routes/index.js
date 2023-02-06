const authRoutes = require("./auth.routes");
const producRoutes = require('./products.routes');
const cartRoutes =require('./cart.routes');
const orderRoutes = require('./order.routes')

const routerApi = (app) => {

    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1", producRoutes);
    app.use("/api/v1", cartRoutes);
    app.use("/api/v1", orderRoutes);

  };
  
  module.exports = routerApi;