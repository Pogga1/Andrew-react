import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6aq9ial', 'template_r109nrl', e.target, 'wVD3r2AJE3mSGXltj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contactForm row'>
      <h1>Contact Page</h1>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label for="user_email">Email address</label>
          <input type="email" className="form-control" id="user_email" name='email'  />
        </div>
        <div className="form-group">
          <label for="user_name">Name</label>
          <input type="text" className="form-control" id="user_name" name='name'  />
        </div>
        <div className="form-group">
          <label for="user-message">Message</label>
          <textarea className="form-control" id="user-message" name= 'message' ></textarea>
        </div>
        <div id='buttonContainer'>
        <button type='submit' className="contactFormBtn" onSubmit={sendEmail} Submit>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact