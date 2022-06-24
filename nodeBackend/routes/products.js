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
});

// ## GET One product
router.get('/:id', getProduct, (req, res)=> {
    res.send(res.foundProduct);
});

// ## the boring part of CRUD
// ## Create a single product

router.post('/', async (req, res)=> {
    // constructing a product object based on the model using the data send in body
    const newProductToInsert = new Product({
        sku: req.body.sku,
        name: req.body.name,
        date_added: req.body.date_added,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        image: req.body.image
    });

    try {
        const productObject = await newProductToInsert.save();
        res.json('product added just now: ' + productObject);
    } catch (error) {
        res.json({'Error while inserting a product ::': error.messaage});
    }
});

// ## Update a single product
router.put('/:id', getProduct, async (req, res)=> {
    try {
        // note: could simply do await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        // but this is more explicit + am making use of the getProduct middleware
        if (req.body.sku) {
            res.foundProduct.sku = req.body.sku;
        }
        if (req.body.name) {
            res.foundProduct.name = req.body.name;
        }
        if (req.body.price) {
            res.foundProduct.price = req.body.price;
        }
        if (req.body.quantity) {
            res.foundProduct.quantity = req.body.quantity;
        }
        if (req.body.description) {
            res.foundProduct.description = req.body.description;
        }
        if (req.body.image) {
            res.foundProduct.image = req.body.image;
        }
        
        const updatedProduct = await res.foundProduct.save();
        res.json(updatedProduct);
    } catch (error) {
        res.json({'Error while updating a product ::': error.messaage});
    }
});

// ## Delete a single product
router.delete('/:id', getProduct, async (req, res)=> {
    try {
        const deletedProduct = await res.foundProduct.remove();
        res.json(deletedProduct);
    } catch (error) {
        res.json({'error while deleting a product': error.messaage});
    }
});

module.exports = router;