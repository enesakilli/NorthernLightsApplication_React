import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>NorthernLights</h2>
      <p>Please choose an option from the menu below.</p>
      <div style={{ marginTop: '20px' }}>
        <Link
          to="/login"
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            borderRadius: '5px'
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{
            margin: '0 10px',
            padding: '10px 20px',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#28a745',
            borderRadius: '5px'
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
