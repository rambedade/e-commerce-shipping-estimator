# E-Commerce Shipping Charge Estimator

This is a Node.js and Express-based application that provides APIs to calculate shipping charges for a B2B e-commerce platform. The application determines the nearest warehouse to a seller, calculates shipping charges, and supports multiple delivery modes and speeds.

---

## **Features**
- Retrieve the nearest warehouse for a seller.
- Calculate shipping charges for a customer based on warehouse distance and delivery mode.
- Combine warehouse retrieval and shipping charge calculation in a single API.

---

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, dotenv

---

## **Setup Instructions**

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or remotely
- Git installed

### Steps to Run
Clone the repository:

bash
Copy code
git clone <repository-url>
cd e-commerce-shipping-estimator
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the project root with the following content:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/ecommerce
PORT=5000
Seed sample data in MongoDB (optional):
Use MongoDB Compass or a script to insert the following collections:

warehouses
customers
sellers
Start the server:

bash
Copy code
npm run dev
Access the application:
The server will run at:

arduino
Copy code
http://localhost:5000



## **API Endpoints**

### **1. Get the Nearest Warehouse for a Seller**
- **Endpoint**: `GET /api/v1/warehouse/nearest`
- **Query Parameters**:
  - `sellerId`: The ID of the seller.
- **Example Request**:
  ```bash
  GET http://localhost:5000/api/v1/warehouse/nearest?sellerId=Seller-123
  Response:
   {
  "warehouseId": "WH-001",
  "warehouseLocation": { "lat": 12.99999, "lng": 37.923273 }
  }


### **2. Get Shipping Charges for a Customer**
- **Endpoint**: `GET /api/v1/shipping-charge`
- **Query Parameters**:
  - `warehouseId`: The ID of the warehouse.
  - `customerId`: The ID of the customer.
  - `deliverySpeed`: standard or express.
- **Example Request**:
  ```bash
  GET GET http://localhost:5000/api/v1/shipping-charge?warehouseId=WH-001&customerId=Cust-123&deliverySpeed=standard
  Response:
  {
  "shippingCharge": 150.0
  }

### **3. Calculate Shipping Charges for a Seller and Customer**
- **Endpoint**: `POST /api/v1/shipping-charge/calculate`
- **Request Body** `{
  "sellerId": "Seller-123",
  "customerId": "Cust-123",
  "deliverySpeed": "express"
}
`
- **Example Request**:
  ```bash
  
  **Endpoint**: `POST POST http://localhost:5000/api/v1/shipping-charge/calculate`
  Response:
  {
  "shippingCharge": 180.00,
  "nearestWarehouse": {
    "warehouseId": "WH-001",
    "warehouseLocation": { "lat": 12.99999, "lng": 37.923273 }
  }
  }






