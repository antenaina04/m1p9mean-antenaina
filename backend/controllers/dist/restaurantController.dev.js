"use strict";

var express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var _require = require('../models/restaurant'),
    Restaurant = _require.Restaurant; // => localhost:3000/restaurants/


router.get('/', function (req, res) {
  Restaurant.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Restaurants :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/restaurants/_id

router.get('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Restaurant.findById(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Restaurants :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/restaurants/

router.post('/', function (req, res) {
  var restaurant = new Restaurant({
    created_at: null,
    updated_at: null,
    restaurant_name: req.body.restaurant_name,
    restaurant_location: req.body.restaurant_location,
    restaurant_phone: req.body.restaurant_phone,
    restaurant_logo: req.body.restaurant_logo
  });
  restaurant.save(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Restaurant Save :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/restaurants/_id

router.put('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  var restaurant = {
    created_at: null,
    updated_at: null,
    restaurant_name: req.body.restaurant_name,
    restaurant_location: req.body.restaurant_location,
    restaurant_phone: req.body.restaurant_phone,
    restaurant_logo: req.body.restaurant_logo
  };
  Restaurant.findByIdAndUpdate(req.params.id, {
    $set: restaurant
  }, {
    "new": true
  }, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Restaurant Update :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/restaurants/_id

router["delete"]('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  Restaurant.findByIdAndRemove(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Restaurant Delete :' + JSON.stringify(err, undefined, 2));
    }
  });
});
module.exports = router;