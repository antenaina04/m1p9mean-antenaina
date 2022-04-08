"use strict";

var express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var _require = require('../models/order'),
    Order = _require.Order; // => localhost:3000/order/


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

router.post('/', function (req, res) {
  var order = new Order({
    created_at: null,
    updated_at: null,
    id_user: req.body.id_user,
    id_dishes: req.body.id_dishes,
    order_price: req.body.order_price,
    order_status: req.body.order_status
  });
  order.save(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Order Save :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/order/_id

router.put('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  var order = new Order({
    created_at: null,
    updated_at: null,
    id_user: req.body.id_user,
    id_dishes: req.body.id_dishes,
    order_price: req.body.order_price,
    order_status: req.body.order_status
  });
  Order.findByIdAndUpdate(req.params.id, {
    $set: order
  }, {
    "new": true
  }, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Order Update :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/order/_id

router["delete"]('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Order.findByIdAndRemove(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Order Delete :' + JSON.stringify(err, undefined, 2));
    }
  });
});
module.exports = router;