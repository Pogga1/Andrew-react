import React from 'react';
import PasswordGenerator from '../assets/passwordGenerator.png'
import Portfolio from '../assets/portfolio1.png'
import NoteTaker from '../assets/noteTaker.png'


function Projects() {
  return (
    <div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body ">
          <a href='' className='link'>
            <img src={PasswordGenerator} alt="Password Generator" className='passwordGeneratorImg'></img>
          </a>
          <p className='caption'>Password Generator</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={Portfolio} alt="First Portfolio" className='passwordGeneratorImg'></img>
          </a>
          <p className='caption'>First Portfolio</p>
        </div>
      </div>
    </div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={ArtApi} alt="" className='weatherImg'></img>
          </a>
          <p className='caption'>Art Institute of Chicago Api</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={Weather} alt="Weather Dashboard" className=''></img>
          </a>
          <p className='caption'>Weather Dashboard</p>
        </div>
      </div>
    </div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={NoteTaker} alt="Note Taker" className=''></img>
          </a>
          <p className='caption'>Note Taker</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={TeamSpeak} alt="" className=''></img>
          </a>
          <p className='caption'>TeamSpeak</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projects;