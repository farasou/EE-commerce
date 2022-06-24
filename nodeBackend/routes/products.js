const router = require('express').Router();
const Product = require('../models/Product');

// Middleware to make life easier
const getProduct = async (req, res, next)=>{
    let foundProduct;
    try {
        foundProduct = await Product.findById(req.params.id);
        if (!foundProduct)
        return res.status(404).json({'ID Not Found': req.params.id});
    } catch (error) {
        res.json({'error while retrieving product ::': error.message});
    }
    res.foundProduct = foundProduct;
    next();
}


/*
    REST API for products TO PERFORM BASIC CRUD OPERATIONS
*/


// ## GET ALL
router.get('/', async (req, res)=> {
    try {
        const productsList = await Product.find();
        res.json(productsList);
    } catch (error) {
        res.status(500).json({ 'Error while retrieving the products ::': error.messaage});
    }
})







module.exports = router