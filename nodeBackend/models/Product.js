const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    'sku': {
        type: Number,
        required: true
    },
    'name': {
        type: String,
        required: true
    },
    "date_added": {
        type: [Date],
        default: [new Date()]
    },
    "price": {
        type: Number,
        required: true
    },
    "quantity": {
        type: Number,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true,
        default: "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"
    }
})


module.exports = mongoose.model('Product', productSchema)