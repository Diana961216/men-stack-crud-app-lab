const express = require('express');
const Dog = require('../models/dog.js');
const router = express.Router();

module.exports = router;

//INDUCES

// INDEX
router.get('/dogs', async (req, res) => {
    const allDogs = await Dog.find();
    res.render('dogs/index.ejs', {dogs: allDogs});
  });


// NEW
router.get('/dogs/new', (req, res) => {
  res.render('dogs/new.ejs');
});

// DELETE


// UPDATE


// CREATE
router.post('/dogs', async (req, res) => {
    console.log(req.body);
    try {
        await Dog.create(req.body);
    } catch (error) {
        console.error('Error creating dog:', error);
        return res.status(500).send('Internal Server Error');
    }
    res.redirect('/dogs');
});


// EDIT


// SHOW
router.get('/dogs/:id', async (req, res) => {
    const foundDog = await Dog.findById(req.params.id);
    res.render('dogs/show.ejs', {dog: foundDog});
});