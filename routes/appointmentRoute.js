const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointmentModel');
const jwt = require('jsonwebtoken');

router.post('/book', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const newAppointment = new Appointment({
      ...req.body,
      user: userId,
    });

    await newAppointment.save();
    res.status(200).send({ message: 'Appointment booked successfully', success: true });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).send({ message: 'Server error', success: false });
  }
});

module.exports = router;
