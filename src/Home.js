import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return ( 
    <div className='homeContianer'>
      <h2 id='h2'>NorthernLights</h2>
      <p id='p'>Please choose an option from the menu below</p>
      <div className='buttonLocation'> {/* ayrı bir div icine aldik cunku sadece bu butonlarin konumunu degistirebilelim, ayri div icine almazsak yazilarla birlikte degisecekti */}
        <Link id='homeLoginLink' to="/login"> {/* Burada /login e giden tiklanacak link koyduk ve App.js de /login URL'sini {Login} sayfasi ile eslestirdik */}
          Login
        </Link>
        <Link id='homeRegisterLink' to="/register"> {/* Bu kisimda Route Bileseni kullanmaya gerek yoktur*/}
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
