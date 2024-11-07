import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => { // Sayfanin yeniden yüklemesini engeller
    event.preventDefault();
    
    if (username === 'user' && password === 'password') {
      alert('Login Successfull');
      // Burada bir API cagrisi yapilmali --> kullaniciyi dogrulamak için backend'e istek gonderilmeli
    } else {
      setError('Wrong Username or Password');
    }
  };

  return (
    <div className='loginContainer'> {/* style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }} */}
      <p id='p2'>Login</p>
      <form onSubmit={handleSubmit}> {/* Form verilerini isler ve sayfanin yeniden yuklenmesini engeller */}
        <div className='loginSecondContainer'>
          <label htmlFor="username">Username</label> {/* Kullanici adi alani icin bir etiket olusturur, etiketin kullanici adi giris alaniyla iliskilendirilmesini saglar */}
          <input className='loginInput' // Bir metin giris alanidir. Kullanici adi girisi yapmak icin kullanilir
            type="text" // Bu input alani bir yazi alacak sekilde ayarlandi
            id="username"
            value={username} // Kontrollü Bileşen - username değerini input alanına bağlar (degisiklikler state e yansir ve input alaninda gorunur)
            onChange={(e) => setUsername(e.target.value)} // Kullanici input alaninda bir sey yazdiginda, bu deger setUsername fonksiyonu ile username state'ine kaydedilir
            required // input alanının boş bırakılamayacağını belirtir
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
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajlarini kullaniciya gostermek icin Kosullu Render (Kosullu Goruntuleme) yapar 
        Error state'indeki deger (setError cagirilacak), kirmizi renkli bir paragraf icinde kullaniciya gosterilir */} 
        <button id='loginButton' type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
