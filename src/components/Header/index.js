import React from 'react';


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
    </header>
  );
}

export default Header;