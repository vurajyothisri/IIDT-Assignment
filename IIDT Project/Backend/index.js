// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const Tip = require('./models/tipsmodel');

const app = express();
const PORT = 3000;
app.use(cors());
// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://jyothisri:jyothi789@food-munch.v3kbxjz.mongodb.net/Food-Munch?retryWrites=true&w=majority&appName=Food-Munch');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// POST route to add a new tip
app.post('/tips', async (req, res) => {
  try {
    const { username, text } = req.body;
    const newTip = new Tip({ username, text });
    await newTip.save();
    res.status(201).send('Tip added successfully');
  } catch (error) {
    console.error('Error adding tip:', error);
    res.status(500).send('Failed to add tip');
  }
});

// GET route to fetch all tips
app.get('/tips', async (req, res) => {
  try {
    const tips = await Tip.find({});
    res.json(tips);
  } catch (error) {
    console.error('Error fetching tips:', error);
    res.status(500).send('Failed to fetch tips');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// mongodb+srv://jyothisri:<password>@food-munch.v3kbxjz.mongodb.net/?retryWrites=true&w=majority&appName=Food-Munch