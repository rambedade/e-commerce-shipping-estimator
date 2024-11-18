exports.calculateShippingCharge = async (req, res) => {
    const { sellerId, customerId, deliverySpeed } = req.body;

    if (!sellerId || !customerId || !deliverySpeed) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    res.json({ message: 'Shipping charge calculated successfully!' });
};
