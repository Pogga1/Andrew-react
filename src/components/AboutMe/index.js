import React from 'react';
import Me from '../../assets/Me.jpg'
import'./AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutMe() {
    return (
      <div className='AboutMe '>
        <div>
          <h2>About Me</h2>
        </div>
        <div className="container">
      
        <div className='infoContainer'>
          <div className="card col" >
            <div className="card-body">
              <p className="card-text text-center">My name is Andrew Eysoldt and i am a full stack web developer from the University of Arizona</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <p className="card-text text-center"></p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <p className="card-text text-center"></p>
            </div>
          </div>
          <div className="card col">
          </div>
        </div>
        </div>
      </div>
    );
  }

  export default AboutMe