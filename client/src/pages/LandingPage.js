import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Add a separate CSS file for styling the landing page

const LandingPage = () => {
  return (
    <div className="landing-container" style={{ backgroundImage: `url('/the-importance-of-daily-meditation.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/login">Login</Link></li>
            <li className="nav-item"><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <section className="intro">
        <h1 className="project-name">Spiritual Guidance Appointment System</h1>
        <p className="project-description">Spirituality is the foundation of life.</p>
        <Link to="/home">
          <button className="primary-button">Go to Application</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
