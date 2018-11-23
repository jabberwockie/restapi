// Separate routes into logical components, keep it modular!
const express = require('express');
const router = express.Router();
//require the model we created
const Band = require('../models/band');

//Get a list of bands from de db
router.get('/bands', function(req, res){
  res.send({type: 'GET'});
});

//Add a new band to the db
router.post('/bands', function(req, res){
  //create the object locally AND save it to the database at the same time.
  Band.create(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    genre: req.body.genre
    });
});

//Update a band in the db
router.put('/bands/:id', function(req, res){
  res.send({type: 'PUT'});
});

//Delete a band from the db
router.delete('/bands/:id', function(req, res){
  res.send({type: 'DELETE'});
});

module.exports = router;
