const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/userManagementDB';
mongoose.connect(mongoURI)  // Removed deprecated options
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route to check if the server is running
app.get('/', (req, res) => res.send('Server is running'));

// CRUD routes (for user management)
const User = require('./models/User');

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));

