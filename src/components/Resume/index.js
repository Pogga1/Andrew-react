import React from "react";
import "./Resume.css";
import { SiHtml5, SiJava, SiCss3, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiNodedotjs, SiReact, SiJquery, SiHeroku, SiGit, SiNpm, SiHandlebarsdotjs } from 'react-icons/si'
import resume from '../../assets/Andrew Eysoldt.pdf'
export default function Resume() {
  return (
    <div className="resume">
        <div  className="container d-flex justify-content-center">
          <a className='button rounded' href={resume} target='_blank' rel='noreferrer'>View Resume Here</a>
        </div>
      <h1 className=" justify-content-center d-flex mt-4 highlights">My Skills</h1>
      <div className="skill-container text-center">
                <h1 className="Skills mx-5">
               <SiHtml5/> Html
               <SiJava/> JavaScript
               <SiCss3/> CSS
               <SiBootstrap/> Bootstrap
               <SiTailwindcss/> Tailwind
               <SiMongodb/> MongoDb
               <SiExpress/> Express
               <SiMysql/> MySql
               <SiNodedotjs/> Node.js
               <SiReact/> React
               <SiJquery/> Jquery
               <SiHeroku/> Heroku
               <SiGit/> Git
               <SiNpm/> Npm
               <SiHandlebarsdotjs/> Handlebars
                </h1>
              </div>
    </div>
  );
}
