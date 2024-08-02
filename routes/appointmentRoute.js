const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointmentModel');
const jwt = require('jsonwebtoken');

const defaultGuider = 'Default Spiritual Guider';

// Middleware to authenticate JWT token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'No token provided', success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Invalid token', success: false });
  }
};

// Book Appointment Route
router.post('/book', authMiddleware, async (req, res) => {
  try {
    const newAppointment = new Appointment({
      ...req.body,
      guide: defaultGuider, // Set the default guider
      user: req.userId,
    });

    await newAppointment.save();
    res.status(200).send({ message: 'Appointment booked successfully', success: true });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).send({ message: 'Server error', success: false });
  }
});

module.exports = router;



