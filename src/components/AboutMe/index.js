import React from 'react';
import Me from '../../assets/Me.jpg'
import'./AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SiHtml5, SiJava, SiCss3, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiNodedotjs, SiReact, SiJquery, SiHeroku, SiGit, SiNpm, SiHandlebarsdotjs } from 'react-icons/si'



function AboutMe() {
    return (
      <div className='AboutMe '>
        <div>
          <h2>About Me</h2>
        </div>
        <div className="container">
        <div className="">
            <div className="card-img mb-3">
              <div className='meImgContainer '>
                <img src={Me} alt="me" className='image'></img>
              </div>
            </div>
          </div>
        <div className='infoContainer'>
          <div className="card col" >
            <div className="card-body">
              <p className="card-text text-center">My name is Andrew Eysoldt and i am a full stack web developer from the University of Arizona</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <p className="card-text text-center">I love to learn new things and am very passionate about learning code. My personal favorite technologies are javaScript, React, MongoDb, Express, and Node.  </p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <p className="card-text text-center">My favorite musical artist is 'The Weeknd' and i enjoy these movies: Prey, Kill Bill, Pirates of the Carribean, John Wick, and more</p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body">
              <p className="card-text text-center">My skills: </p>
            </div>
          </div>
          <div className="card col">
            <div className="card-body pt-0">
              <p className="card-text text-center">
                <h2>
                <ul>
                  <li> <SiHtml5/>  <SiJava/> <SiCss3/> <SiBootstrap/> <SiTailwindcss/> <SiMongodb/> <SiExpress/> <SiMysql/> <SiNodedotjs/> <SiReact/> <SiJquery/> <SiHeroku/> <SiGit/> <SiNpm/> <SiHandlebarsdotjs/></li>
                </ul>
                </h2>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

  export default AboutMe