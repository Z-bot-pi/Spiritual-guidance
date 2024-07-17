const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

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
            password: hashedPassword
        });

        // Save user
        await newUser.save();
        res.status(200).send({ message: 'User created successfully', success: true });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Server error', success: false });
    }
});

router.post('/login', async (req, res) => {
    try {
        // Implement login logic here
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send({ message: 'Server error', success: false });
    }
});

module.exports = router;
