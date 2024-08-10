import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === 'user' && password === 'password') {
      alert('Login Successfull');
      // Burada bir API cagrisi yapilmali
    } else {
      setError('Wrong Username or Password');
    }
  };

  return (
    <div className='loginContainer'> {/* style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }} */}
      <p id='p2'>Login</p>
      <form onSubmit={handleSubmit}>
        <div className='loginSecondContainer'>
          <label htmlFor="username">Username</label>
          <input className='loginInput'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='loginThirdContainer'>
          <label htmlFor="password">Password</label>
          <input className='loginInput'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button id='loginButton' type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
