const express = require('express');
const app = express();
const cors = require('cors')

//controllers importeras från /controllers/controllerName och används som middleware - används med router för att sätta listeners på olika endpoints
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')

//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Använder controllern som middleware, väljer endpoint att lyssna på ex '/api/items/', namnpåControllern
app.use('/api/products/', productController);
app.use('/api/users/', userController);

module.exports = app;