const ProductsInCar = require('../models/productInCar.models');
const Products = require('../models/products.models');
const Car = require('../models/car.models');
const Users = require('../models/users.models');


class ProductsInCartService {

    static async addProduct(id, product) {
        try {
            const result = await ProductsInCar.create({
                carId: id,
                productId: product.productId,
                quantity: product.quantity,
            },
                { where: { carId: id } });
            return result;
        } catch (error) {
            throw error;

        }
    }
    static async getCartById(id) {
        try {
            const result = await Car.findOne({
                where: { id },
                attributes: ['id', 'totalPrice'],
                include: [
                    {
                        model: Users,
                        as: 'buyer',
                        attributes: ['id', 'username']
                    },
                    {
                        model: ProductsInCar,
                        as: 'cart_products',
                        attributes: ['id', 'price', 'quantity'],
                        include: {
                            model: Products,
                            as: 'product_car',
                            attributes: {
                                exclude: ['createdAt', 'updatedAt', 'userId', 'user_id'],
                            }
                        }
                    }
                 ]
            });

            if(result){
                const productsCar = await ProductsInCar.findOne({where: {car_id: result.id}});
                const product = await Products.findOne({where: {id: productsCar.productId}});
                await ProductsInCar.update({price: productsCar.quantity * product.price},{where: {id: productsCar.id}});
                await Car.update({totalPrice: result.totalPrice + productsCar.price}, {where: {id: result.id}});    
            }
         return result;
        } catch (error) {
           throw error;
        }
    }
}

module.exports = ProductsInCartService;
