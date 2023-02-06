const ProductService = require('../services/products.services');

const getAllProducts = async(req, res) => {
    try {
     
     const result = await ProductService.getAll();
     res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)  
    }
}

const createProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = await ProductService.create(id,product);
        res.status(201).json({ message: 'product created'});        
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
}