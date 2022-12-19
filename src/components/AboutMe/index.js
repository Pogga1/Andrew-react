import React from 'react';

import'./AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function AboutMe() {
    return (
      <div className='AboutMe d-flex'>
        <div className='infoContainer'>
          <h2 className='d-flex justify-content-center header'>About Me</h2>

          <div>
            Welcome to my portfolio where you can find information about me, my projects, and contact info! 
              To start off, my name is Andrew Eysoldt and I am a full stack web developer from Tucson, Arizona. I am very hardworking and passionate about learning new things. I aim to continue improving in my coding skills and further hone the skills i have learned. My favorite hobbies include watching movies and playing video games.Thankyou for visiting my page!
          </div>
           <h3 className='movies'>My favorite movies</h3>
           <div>
            {/* <img src=''></img>
            <img src=''></img> */}
           </div>
        </div>
        </div>
    );
  }

  export default AboutMe