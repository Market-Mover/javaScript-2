const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);
//spara ner order till orders-array
router.post('/order', userModel.saveOrder);
//hämta orders-array
router.post('/orders', userModel.getOrder);




module.exports = router;