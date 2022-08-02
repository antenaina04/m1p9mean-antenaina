"use strict";

var mongoose = require('mongoose');

var Order = mongoose.model('Order', {
  created_at: {
    type: String
  },
  updated_at: {
    type: String
  },
  order_price: {
    type: Number
  },
  order_status: {
    type: String
  },
  id_restaurant: {
    type: String
  },
  id_user: {
    type: String
  }
});
module.exports = {
  Order: Order
};