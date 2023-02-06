const Products = require('../models/products.models');
const Users = require('../models/users.models');
const { Op } = require("sequelize");



class ProductService {
    static async getAll() {
        try {
            const result = await Products.findAll({
                where: {
                    available_qty: {
                        [Op.gt]: 0,
                    },
                },
                attributes: ['id','name','price','availableQty','status'],
                include: {
                    model: Users,
                    as: 'owner',
                    attributes: ['username'],
                }

            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(id, product) {
        try {
            const result = await Products.create(product, {
                where: {user_id: id}
            });
            return result;
        } catch (error) {
            throw error;
         
        }
    }
}

module.exports =  ProductService;