const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    price: Number,
    attributes: {
        weight: Number,
        dimensions: String,
    },
    sellerId: String, // Associated seller ID
});

module.exports = mongoose.model('Product', productSchema);
