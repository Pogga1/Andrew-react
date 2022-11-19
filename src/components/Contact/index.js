import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contactForm row'>
      <h1>Contact Page</h1>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label for="user_email">Email address</label>
          <input type="email" className="form-control" id="user_email"  />
        </div>
        <div className="form-group">
          <label for="user_name">Name</label>
          <input type="text" className="form-control" id="user_name"  />
        </div>
        <div className="form-group">
          <label for="user-message">Message</label>
          <textarea className="form-control" id="user-message" ></textarea>
        </div>
        <div id='buttonContainer'>
        <button type='submit' className="contactFormBtn" onSubmit={sendEmail} Submit>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact