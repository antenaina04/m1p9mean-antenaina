"use strict";

var express = require('express');

var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var _require = require('../models/user'),
    User = _require.User; // => localhost:3000/users/


router.get('/', function (req, res) {
  User.find(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/users/_id

router.get('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  User.findById(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/users/

router.post('/', function (req, res) {
  var user = new User({
    created_at: null,
    updated_at: null,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    id_profile: req.body.id_profile
  });
  user.save(function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      console.log('Error in User Save :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/users/_id

router.put('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  var user = {
    created_at: null,
    updated_at: null,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    id_profile: req.body.id_profile
  };
  User.findByIdAndUpdate(req.params.id, {
    $set: user
  }, {
    "new": true
  }, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in User Update :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // => localhost:3000/users/_id

router["delete"]('/:id', function (req, res) {
  if (!ObjectId.isValid(req.params.id)) return res.status(400).send("No record with given id : ".concat(req.params.id));
  User.findByIdAndRemove(req.params.id, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2));
    }
  });
}); // GetUserByEmailAndPassword

router.get('/check_user/:email/user/:password', function (req, res) {
  var query = {
    "email": req.params.email,
    "password": req.params.password
  };
  User.find(query, function (err, doc) {
    if (!err) {
      res.send(doc);
    } else {
      console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2));
    }
  });
});
module.exports = router;