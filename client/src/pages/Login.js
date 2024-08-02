import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post('/api/users/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.data); // Store JWT token
        toast.success('Login successful!');
        navigate('/home'); // Redirect to the home page
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1 className='card-title'>Welcome back.</h1>
      <p className='card-description'>Login to your account to continue</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

