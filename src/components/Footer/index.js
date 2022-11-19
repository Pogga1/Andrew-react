import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {

  return (
    <footer className="footer d-flex mx-5 position-fixed bottom-0 mt-4">
      <div>
        <h5> If your interested:</h5>
      </div>
      <div>
      <a href="https://github.com/Pogga1" target='_blank' className='mx-4'>Github</a>
      </div>
      <div>
      <a href="https://profile.indeed.com/?hl=en&co=US&from=gnav-homepage&_ga=2.128842254.32306074.1668894516-133722550.1663131909" target= '_blank'>Indeed</a>
      </div>
    </footer>
  );
}

export default Footer;