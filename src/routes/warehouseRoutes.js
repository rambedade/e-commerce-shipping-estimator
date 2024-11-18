const express = require('express');
const router = express.Router();
const { getNearestWarehouse } = require('../controllers/warehouseController');

// GET /api/v1/warehouse/nearest
router.get('/nearest', getNearestWarehouse);

module.exports = router;
