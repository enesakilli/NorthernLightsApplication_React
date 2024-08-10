import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='homeContianer' style={{ textAlign: 'center', padding: '20px' }}>
      <h2 id='h2'>NorthernLights</h2>
      <p id='p'>Please choose an option from the menu below</p>
      <div style={{ marginTop: '20px' }}>
        <Link id='homeLoginLink' to="/login">
          Login
        </Link>
        <Link id='homeRegisterLink' to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
