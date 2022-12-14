import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Me from '../../assets/Me.jpg'

const styles ={
  header: {
    background: '',
    display: 'flex',
    justifyContent: 'Center'
  },
}

function Header() {

  return (
    <header className="header" style={styles.header}>
      <h1 className='headerName'>Andrew Eysoldt</h1>
      <img src={Me} className='me d-flex justify-content-end'></img>
    </header>
  );
}

export default Header;