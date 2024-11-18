const express = require('express');
const router = express.Router();
const { calculateShippingCharge } = require('../controllers/shippingController');

// Define the POST endpoint for shipping charge calculation
router.post('/calculate', calculateShippingCharge);

module.exports = router;
