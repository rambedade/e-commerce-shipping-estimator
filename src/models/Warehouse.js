const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    warehouseId: String,
    name: String,
    location: {
        lat: Number,
        lng: Number,
    },
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
