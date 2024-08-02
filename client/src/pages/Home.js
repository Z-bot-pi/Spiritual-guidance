import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guide, setGuide] = useState('');

  const bookAppointment = async () => {
    try {
      const token = localStorage.getItem('token'); // Get JWT token from local storage
      const response = await axios.post('/api/appointments/book', {
        date,
        time,
        guide,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        }
      });

      if (response.data.success) {
        toast.success('Appointment booked successfully!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
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
        <input
          type="text"
          placeholder="Spiritual Guide"
          value={guide}
          onChange={(e) => setGuide(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Home;

