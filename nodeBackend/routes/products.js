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

// ## GET One product
router.get('/:id', getProduct, (req, res)=> {
    res.send(res.foundProduct);
})

// ## the boring part of CRUD
// ## Create a single product

router.post('/', async (req, res)=> {
    // constructing a product object based on the model using the data send in body
    const newProductToInsert = new Product({
        sku: req.body.sku,
        sku: req.body.name,
        sku: req.body.date_added,
        sku: req.body.price,
        sku: req.body.quantity,
        sku: req.body.description,
        sku: req.body.image
    });

    try {
        const productObject = await newProductToInsert.save();
        res.json('product added just now: ' + productObject);
    } catch (error) {
        res.json({'Error while inserting a product ::': error.messaage});
    }
})




module.exports = router