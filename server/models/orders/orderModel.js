const mongodb = require('mongoose');
const orderSchema = require('./orderSchema');
const Order = require('./orderSchema');

exports.addOrder = (req, res) => {
  
    Order.updateOne( { _id: req.params.id} , {
      ...req.body,
      modified: Date.now()
    })
       .then(() => {
        res.status(200).json({
          statusCode:200,
          status: true,
          message: 'order updated'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode:500,
          status: false,
          message:'Failed to update product'
        })
      })
    }