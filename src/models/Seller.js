const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    sellerId: String,
    name: String,
    location: {
        lat: Number,
        lng: Number,
    },
    products: [String], 
});

module.exports = mongoose.model('Seller', sellerSchema);
