const ProductsInCartService = require('../services/cart.services');

const addProductToCart = async(req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const result = await ProductsInCartService.addProduct(id, product);
        res.status(201).json({message: 'product added'});        
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getAllProductsInCar = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductsInCartService.getCartById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)  
    }
}



module.exports = {
    addProductToCart,
    getAllProductsInCar,

}