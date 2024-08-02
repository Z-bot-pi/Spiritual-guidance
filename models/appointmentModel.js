const mongoose = require('mongoose');

// Define the schema for an appointment
const appointmentSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    appointmentTime: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

// Create the model from the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the model
module.exports = Appointment;

