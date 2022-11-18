import React from 'react';
import Me from '../../assets/Me.jpg'
import backgroundImage from '../../assets/lakeside-pink-sky-sunset-minimal-art-gradient-background-1920x1080-4584.png'
import'./AboutMe.css';

const styles= {
  // {backgroundImage: `url(${backgroundImage})`}
};


function AboutMe() {
    return (
      <div className='AboutMe'>
        <div>
          <h2>About Me</h2>
        </div>
        <div className="container">
        <div className="card col imgCard" styles={styles.card}>
            <div className="card-img">
              <div className='meImgContainer'>
                <img src={Me} alt="image of me" className=''></img>
              </div>
            </div>
          </div>
          <div className="card col" styles={styles.card}>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"> </p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <h5></h5>
              <p className="card-text"> 
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default AboutMe