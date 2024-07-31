# Ecommerce-Backend
E-Commerce Backend
Overview
This project provides the backend infrastructure for an e-commerce platform using Express.js and Sequelize to interact with a PostgreSQL database. It includes RESTful API endpoints for managing categories, products, and tags in the database.

Features
Express.js: Server framework for handling API requests and responses.

Sequelize: ORM for interacting with PostgreSQL.

PostgreSQL: Database for storing e-commerce data.

Environment Variables: Securely manage database connection details.

API Endpoints: CRUD operations for categories, products, and tags.


Getting Started

Prerequisites
Node.js (v14 or higher)
PostgreSQL (v12 or higher)
nvm (Node Version Manager) (optional but recommended)


Installation
Clone the repository


git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
Install dependencies


npm install
Configure environment variables

Create a .env file in the root directory with the following content:


DB_NAME=ecommerce_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=3001


Create the database

Connect to PostgreSQL and create the database:


psql -U postgres

sql

CREATE DATABASE ecommerce_db;
Run database migrations and seed data

Ensure your package.json contains a script for seeding the database. If not, you may need to create one.


npm run seed


Usage
Start the server

npm start
Access the API

Categories: /api/categories
Products: /api/products
Tags: /api/tags
Test the API

Use tools like Insomnia or Postman to test the API endpoints:

GET /api/categories - Retrieve all categories
GET /api/products - Retrieve all products
GET /api/tags - Retrieve all tags
POST /api/categories - Create a new category
POST /api/products - Create a new product
POST /api/tags - Create a new tag
PUT /api/categories/:id - Update a category by ID
PUT /api/products/:id - Update a product by ID
PUT /api/tags/:id - Update a tag by ID
DELETE /api/categories/:id - Delete a category by ID
DELETE /api/products/:id - Delete a product by ID
DELETE /api/tags/:id - Delete a tag by ID


Scripts
Start the server: npm start
Run database seed: npm run seed


Troubleshooting
Permission issues: Ensure that the node_modules directory and other project files have the correct permissions. You may need to adjust permissions or run commands as an administrator.


License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing
Feel free to submit issues and pull requests. Please ensure your contributions adhere to the project's code of conduct and follow the contribution guidelines.
