import React from "react";
import "./Resume.css";
import { SiHtml5, SiJava, SiCss3, SiBootstrap, SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiNodedotjs, SiReact, SiJquery, SiHeroku, SiGit, SiNpm, SiHandlebarsdotjs } from 'react-icons/si'

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="d-flex justify-content-center mt-4 highlights">Resume</h1>
      <p className="card-text text-center">
                <h2>
                <ul>
                  <li> <SiHtml5/>  <SiJava/> <SiCss3/> <SiBootstrap/> <SiTailwindcss/> <SiMongodb/> <SiExpress/> <SiMysql/> <SiNodedotjs/> <SiReact/> <SiJquery/> <SiHeroku/> <SiGit/> <SiNpm/> <SiHandlebarsdotjs/></li>
                </ul>
                </h2>
              </p>
    </div>
  );
}
