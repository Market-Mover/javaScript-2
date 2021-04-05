const mongodb = require('mongoose');
const orderSchema = mongodb.Schema( {
    items : [{
        productId : String,
        quantity : String
        }],

  created: {type: Date, default: Date.now()},
  modified: {type: Date, default: Date.now()}

})

module.exports = mongodb.model('Order', orderSchema);