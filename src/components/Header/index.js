import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Me from '../../assets/Me.jpg'



function Header() {

  return (
    <header className="header">
      <h1 className='headerName'>Andrew Eysoldt</h1>
      <div className='box'>
      <img src={Me} alt='me' className='Me'></img>
      </div>
    </header>
  );
}

export default Header;