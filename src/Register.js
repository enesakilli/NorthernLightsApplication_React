import React, { useState } from 'react';
import alertify from 'alertifyjs';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (event) => { // Sayfanin yeniden yüklemesini engeller
    event.preventDefault();
    alertify.success(username + ' added to database', 3); // Registration Successful yazisindan sonra databaseye eklendigi bilgisi gelecek
    alertify.success(email + ' added to database', 3);
    alertify.success('Password added to database', 3);
    
    if (password !== confirmPassword) { // Sifreler uyusmuyorsa hata mesaji
      setError('Passwords do not match');
      return;
    }

    if (username && email && password) { // Tum alanlar doluysa successful
      setSuccess('Registration Successful');
      setError('');
      // Burada bir API cagrisi yapilmali --> kullaniciyi dogrulamak için backend'e istek gonderilmeli
    } else { 
      setError('Please fill in all the blanks');  // Boş alanlar varsa hata mesaji
    }
  };

  return (
    <div className='registerContainer'> {/* style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }} */}
      <p id='p1'>Register</p>
      <form onSubmit={handleSubmit}>
        <div className='registerSecondContainer'>
          <label htmlFor="username">Username</label>
          <input className='registerInput'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required // Required ile kullanıcının formu göndermeden önce belirli bir alanın doldurmasını zorunlu kılar
          />
        </div>
        <div className='registerSecondContainer'>
          <label htmlFor="email">E-mail</label>
          <input className='registerInput'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='registerSecondContainer'>
          <label htmlFor="password">Password</label>
          <input className='registerInput'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <div className='registerSecondContainer'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input className='registerInput'
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button id='registerButton' type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
