import React from 'react';


const styles ={
  header: {
    background: 'lightblue'
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