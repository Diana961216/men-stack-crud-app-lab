const express = require('express');
const Dog = require('../models/dog.js');
const router = express.Router();

module.exports = router;

//INDUCES

// INDEX


// NEW
router.get('/dogs/new', (req, res) => {
  res.render('dogs/new.ejs');
});

// DELETE


// UPDATE


// CREATE


// EDIT


// SHOW