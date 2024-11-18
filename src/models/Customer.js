const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: String,
    name: String,
    phone: String,
    location: {
        lat: Number,
        lng: Number,
    },
});

module.exports = mongoose.model('Customer', customerSchema);
