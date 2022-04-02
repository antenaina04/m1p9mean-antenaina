var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Dishes } = require('../models/dishes');

// => localhost:3000/dishes/
router.get('/', (req, res) => {
    Dishes.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Dishes :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/dishes/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Dishes.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Dishes :' + JSON.stringify(err, undefined, 2)); }
    });

});

// => localhost:3000/dishes/
router.post('/', (req, res) => {
    var dishes = new Dishes({
        created_at: null,
        updated_at: null,
        dishes_name: req.body.dishes_name,
        dishes_desc: req.body.dishes_desc,
        dishes_price: req.body.dishes_price,
        id_restaurant: req.body.id_restaurant,
    });

    dishes.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Dishes Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/dishes/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var dishes = new Dishes({
            created_at: null,
            updated_at: null,
            dishes_name: req.body.dishes_name,
            dishes_desc: req.body.dishes_desc,
            dishes_price: req.body.dishes_price,
            id_restaurant: req.body.id_restaurant,
        });

        Dishes.findByIdAndUpdate(req.params.id, { $set: dishes }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Dishes Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/dishes/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Dishes.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Dishes Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;