const ProductsInOrderService = require('../services/order.services');


const addProductsInOrder = async(req, res) => {
    try {
        const { id } = req.params;
        const products = req.body;
        const result = await ProductsInOrderService.addProducts(id,products);
        
        res.status(201).json({message: 'products added'});
    } catch (error) {
        res.status(400).json(error.message);
    } 
}

const getOrdersById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductsInOrderService.getAll(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        
    }
}


module.exports = {
    addProductsInOrder,
    getOrdersById,
}