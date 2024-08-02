const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists', success: false });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user
    await newUser.save();
    res.status(200).send({ message: 'User created successfully', success: true });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send({ message: 'Server error', success: false });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'User does not exist', success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Password is incorrect', success: false });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.status(200).send({ message: 'Login successful', success: true, data: token });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ message: 'Server error', success: false });
  }
});

module.exports = router;


