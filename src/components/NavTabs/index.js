import React from 'react';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavTabs.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="headerNav-container "> 
    <Header/>
    <ul className="nav nav-tabs ">
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link NavColor'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#MyCreations"
          onClick={() => handlePageChange('My Creations')}
          className={currentPage === 'My Creations' ? 'nav-link active' : 'nav-link NavColor'}
        >
          My Creations
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link NavColor'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link NavColor'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;