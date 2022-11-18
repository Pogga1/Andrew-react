import React from 'react';
import Wingman from '../../assets/Wingman.gif'
import TeamProfileGenerator from '../../assets/TeamProfileGenerator.png'
import NoteTaker from '../../assets/NoteTaker.png'
import WorkDayScheduler from '../../assets/WorkDayScheduler.png'


function Projects() {
  return (
    <div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body ">
          <a href='' className='link'>
            <img src={Wingman} alt="wingman" className=''></img>
          </a>
          <p className='caption'>Wingman</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={TeamProfileGenerator} alt="Team Profile Generator" className=''></img>
          </a>
          <p className='caption'>Team Profile Generator</p>
        </div>
      </div>
    </div>
    <div className='container portfolioPgContainer'>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={NoteTaker} alt="Note Taker" className=''></img>
          </a>
          <p className='caption'>NoteTaker</p>
        </div>
      </div>
      <div className="card col-md-6 portofolio-img-container">
        <div className="card-body">
          <a href='' className='link'>
            <img src={WorkDayScheduler} alt="Work Day Scheduler" className=''></img>
          </a>
          <p className='caption'>Work Day Scheduler</p>
        </div>
      </div>
    </div>
  
    </div>
  );
}

export default Projects;