import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='homeContianer'>
      <h2 id='h2'>NorthernLights</h2>
      <p id='p'>Please choose an option from the menu below</p>
      <div className='buttonLocation'>
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
