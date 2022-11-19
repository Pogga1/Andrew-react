import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {

  return (
    <footer className="footer d-flex justify-start mx-5 position-relative bottom-0 mt-4">
      <div>
        <h5> Thanks for Visiting!</h5>
      </div>
      <div>
      <a href="https://github.com/Pogga1" target='_blank' className='mx-4'>Github</a>
      </div>
      <div>
      <a href="resume">resume</a>
      </div>
    </footer>
  );
}

export default Footer;