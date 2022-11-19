import React from 'react';
import Wingman from '../../assets/Wingman.gif'
import TeamProfileGenerator from '../../assets/TeamProfileGenerator.png'
import NoteTaker from '../../assets/NoteTaker.png'
import WorkDayScheduler from '../../assets/WorkDayScheduler.png'
import PasswordGenerator from '../../assets/PasswordGenerator.png'
import TextEditor from '../../assets/TextEditor.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCreations.css'

function Projects() {
  return (
    <div className= 'myCreations d-flex flex-wrap justify-content-center '>
    <div className=' container row text-center'>
      <div className="card col-md-6">
        <div className="card-body ">
          <a href='https://github.com/Dustinm5Oly/WingMan' target='_blank' className='link'>
            <img src={Wingman} alt="wingman" className='CreationsImage'></img>
          </a>
          <p className='caption'>Wingman</p>
        </div>
      </div>
      <div className="card col-md-6">
        <div className="card-body">
          <a href='https://github.com/Pogga1/Team-Profile-Gen' target='_blank' className='link'>
            <img src={TeamProfileGenerator} alt="Team Profile Generator" className='CreationsImage'></img>
          </a>
          <p className='caption'>Team Profile Generator</p>
        </div>
      </div>
    </div>
    <div className='container row text-center'>
      <div className="card col-md-6">
        <div className="card-body">
          <a href='https://github.com/Pogga1/Note-Taker' target='_blank'  className='link'>
            <img src={NoteTaker} alt="Note Taker" className='CreationsImage'></img>
          </a>
          <p className='caption'>NoteTaker</p>
        </div>
      </div>
      <div className="card col-md-6">
        <div className="card-body">
          <a href='https://pogga1.github.io/Calendar-Scheduler/' target='_blank' className='link'>
            <img src={WorkDayScheduler} alt="Work Day Scheduler" className='CreationsImage'></img>
          </a>
          <p className='caption'>Work Day Scheduler</p>
        </div>
      </div>
      <div className="card col-md-6">
        <div className="card-body ">
          <a href='https://github.com/Dustinm5Oly/WingMan' target='_blank' className='link'>
            <img src={TextEditor} alt="Text Editor" className='CreationsImage'></img>
          </a>
          <p className='caption'>Text Editor</p>
        </div>
      </div>
      <div className="card col-md-6">
        <div className="card-body ">
          <a href='https://github.com/Pogga1/Password-lottery' target='_blank' className='link'>
            <img src={PasswordGenerator} alt="password Generator" className='CreationsImage'></img>
          </a>
          <p className='caption'>Password Generator</p>
        </div>
      </div>
    </div>
  
    </div>
  );
}

export default Projects;