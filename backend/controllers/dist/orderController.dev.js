"use strict";

var express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var _require = require('../models/order'),
    Order = _require.Order;

var _require2 = require('../models/orderDetails'),
    OrderDetail = _require2.OrderDetail; // => localhost:3000/order/


router.get('/', function (req, res) {
  Order.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/order/_id

router.get('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Order.findById(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/order/restaurant/id_restaurant [getDishesByIdRestaurant]

router.get('/GetOrderByIdUserAndStatus/:id_user/:order_status', function (req, res) {
  if (!ObjectId.isValid(req.params.id_user)) return res.status(400).send("No record with given id : ".concat(req.params.id_user));
  var query = {
    "id_user": req.params.id_user,
    "order_status": req.params.order_status
  };
  Order.find(query, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Order :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/order/

router.post('/', function _callee(req, res) {
  var order, OrderSave;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          order = new Order({
            created_at: null,
            updated_at: null,
            order_price: req.body.order_price,
            order_status: req.body.order_status,
            id_user: req.body.id_user
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(order.save(function (err, docs) {
            if (!err) {
              //Save Order Details
              console.log("Id Order in docs =" + docs._id); //Id Order Last Created

              for (var i = 0; i < JSON.parse(req.body.cart).length; i++) {
                // console.log(JSON.parse(req.body.cart)[i]._id);
                var orderDetail = new OrderDetail({
                  created_at: null,
                  updated_at: null,
                  quantity: 0,
                  //Unfinished
                  id_order: docs._id,
                  //OrderId
                  id_dishes: JSON.parse(req.body.cart)[i]._id // IdDishes

                });
                var OrderDetailSave = orderDetail.save(function (err, docs) {});
              }

              res.send(docs);
            } else {
              console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2));
            }
          }));

        case 3:
          OrderSave = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // => localhost:3000/order/_id
// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);
//     var order = new Order({
//         created_at: null,
//         updated_at: null,
//         order_price: req.body.order_price,
//         order_status: req.body.order_status,
//         id_user: req.body.id_user,
//     });
//     Order.findByIdAndUpdate(req.params.id, { $set: order }, { new: true }, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2)); }
//     });
// });
// => localhost:3000/order/_id
// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);
//     Order.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

module.exports = router;