var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { User } = require('../models/user');

// => localhost:3000/users/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/users/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });

});

// => localhost:3000/users/
router.post('/', (req, res) => {
    var user = new User({
        created_at: null,
        updated_at: null,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        id_profile: req.body.id_profile,
    });

    user.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/users/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
        created_at: null,
        updated_at: null,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        id_profile: req.body.id_profile,
    };

    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/users/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/check_user/:email/:password', (req, res) => {
    if (!ObjectId.isValid(req.params.email) && !ObjectId.isValid(req.params.password))
        return res.status(400).send(`No record with given Email : ${req.params.email} and Password : ${req.params.password}`);
    var query = { email: req.params.email , password: req.params.password };
    Dishes.find(query, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });

});



module.exports = router;