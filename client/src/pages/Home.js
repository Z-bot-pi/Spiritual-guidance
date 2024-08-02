import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const guide = 'Default Spiritual Guider'; // Set the default guider

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem('token'); // Get JWT token from local storage
      console.log('Token:', token);

      const response = await axios.post('/api/appointments/book', {
        date,
        time,
        guide, // Use the default guider
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        }
      });

      console.log('Response:', response);

      if (response.data.success) {
        toast.success('Appointment booked successfully!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Booking failed. Please try again.');
    }
  };

  return (
    <div className="home-container">
      <h2>Book an Appointment</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          bookAppointment();
        }}
      >
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Home;


