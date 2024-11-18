const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const shippingRoutes = require('./routes/shippingRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/v1/warehouse', warehouseRoutes);


// Shipping routes
app.use('/api/v1/shipping-charge', shippingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
