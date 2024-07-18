const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  guide: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
}, {
  timestamps: true
});

const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = Appointment;
