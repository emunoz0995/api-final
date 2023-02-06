const ProductsInOrder = require('../models/productInOrder.models');
const Order = require('../models/orders.models');
const Car = require('../models/car.models');
const ProductsInCart = require('../models/productInCar.models');
const Products = require('../models/products.models');


class ProductsInOrderService {

    static async addProducts(id,products) {
        try {
          const cart = await Car.findOne({ where: {id} });
          const result = await Order.create({ userId: id, totalPrice: cart.totalPrice});
          const itemsProduct = await ProductsInCart.findOne({where: {car_id: id}})

           products.productId.forEach( product => {
               ProductsInOrder.create({ 
                orderId: result.id, 
                productId: product,
                price: itemsProduct.price,
                quantity: itemsProduct.quantity,

             });
             });
        
              return result;
        } catch (error) {
            throw error;
        }
    }
    static async getAll(id) {
        try {
            const result = await Order.findAll({where: {userId: id},
             attributes:['id','totalPrice'] ,
             include:{
                model: ProductsInOrder,
                as: 'order_products',
                attributes: ['id','quantity','price'],
                include: {
                    model: Products,
                    as: 'product_order',
                    attributes: ['id','name','price','imgUrl']
                }

             }
            
            });
         return result;
        } catch (error) {
           throw error;
        }
    }
}

module.exports = ProductsInOrderService;