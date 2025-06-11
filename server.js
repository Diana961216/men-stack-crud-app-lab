const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const Dog = require('./models/dog.js');


app.get('/', (req, res) => {
  res.send('Welcome to the Dog API');
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});