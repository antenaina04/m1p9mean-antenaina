var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Restaurant } = require('../models/restaurant');

// => localhost:3000/restaurants/
router.get('/', (req, res) => {
    Restaurant.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Restaurants :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/restaurants/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Restaurant.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Restaurants :' + JSON.stringify(err, undefined, 2)); }
    });

});

// => localhost:3000/restaurants/
router.post('/', (req, res) => {
    var restaurant = new Restaurant({
        created_at: null,
        updated_at: null,
        restaurant_name: req.body.restaurant_name,
        restaurant_location: req.body.restaurant_location,
        restaurant_phone: req.body.restaurant_phone,
        restaurant_logo: req.body.restaurant_logo,
    });

    restaurant.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Restaurant Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/restaurants/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var restaurant = {
        created_at: null,
        updated_at: null,
        restaurant_name: req.body.restaurant_name,
        restaurant_location: req.body.restaurant_location,
        restaurant_phone: req.body.restaurant_phone,
        restaurant_logo: req.body.restaurant_logo,
    };

    Restaurant.findByIdAndUpdate(req.params.id, { $set: restaurant }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Restaurant Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/restaurants/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Restaurant.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Restaurant Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;