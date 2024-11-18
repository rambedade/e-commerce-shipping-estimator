const Warehouse = require('../models/Warehouse');
const haversine = require('../utils/haversine');

exports.getNearestWarehouse = async (req, res) => {
    const { sellerId } = req.query;
    if (!sellerId) {
        return res.status(400).json({ error: 'Missing sellerId' });
    }

    try {
        const warehouses = await Warehouse.find();
        const sellerLocation = { lat: 13.232, lng: 23.445495 }; 

        const nearestWarehouse = warehouses.reduce((prev, curr) => {
            const prevDistance = haversine(sellerLocation, prev.location);
            const currDistance = haversine(sellerLocation, curr.location);
            return currDistance < prevDistance ? curr : prev;
        });

        res.json({
            warehouseId: nearestWarehouse.warehouseId,
            warehouseLocation: nearestWarehouse.location,
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
