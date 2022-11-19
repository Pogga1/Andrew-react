import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-4">Resume</h1>
      <p className="d-flex-block justify-content-center">
        <h2 className="text-start">
          <ul className="list-group">
            <li className="list-group-item text-light">Andrew Eysoldt</li>
            <li className="list-group-item text-light">
              11917 N Copper Creek Dr., 85737, Tucson, Arizona
            </li>
            <li className="list-group-item text-light">305-992-5184</li>
            <li className="list-group-item text-light">
              Andreweysoldt@gmail.com
            </li>
          </ul>
        </h2>
        <h3 className="d-flex justify-content-center objective">Objective</h3>
        <p className="d-flex justify-content-center text-start">
          - My aim is to continue my education, gain experience, and learn
          valuable skills.
        </p>
        <h3 className="d-flex justify-content-center educational">
          Educational Experience
        </h3>
        <h5 className="d-flex justify-content-center text-start">
          - Highschool Diploma Graduated
        </h5>
        <h5 className="d-flex justify-content-center">
          - 2019 University of Arizona full stack web development bootcamp
          certificate Graduated 2022
        </h5>
        <h5 className="d-flex justify-content-center highlights">Highlights:</h5>
        <div className="d-flex justify-content-center">
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item text-light">
            Proficient in the MERN stack
          </li>
          <li className="list-group-item text-light">Html5</li>
          <li className="list-group-item text-light">CSS</li>
          <li className="list-group-item text-light">Node.js</li>
          <li className="list-group-item text-light">Express.js</li>
          <li className="list-group-item text-light">Npm React</li>
          <li className="list-group-item text-light">MongoDb</li>
          <li className="list-group-item text-light">MySQL</li>
          <li className="list-group-item text-light">JavaScript</li>
          <li className="list-group-item text-light">Jquery</li>
          <li className="list-group-item text-light">Bootstrap</li>
          <li className="list-group-item text-light">Handlebars</li>
          <li className="list-group-item text-light">Tailwind</li>
          <li className="list-group-item text-light">Heroku</li>
          <li className="list-group-item text-light">Git</li>
        </ul>
        </div>
        <div className="d-flex justify-content-center">
        <p>- Tucson Catalina Online Learning Experience (Senior Year)</p>
        <p>- Medical Academy for Science and Technology (Freshman-Junior Years)</p> 
        <h3>Coursework Highlights:</h3>
         Honors classes in the following: Biology, Chemistry, Physics
        Algebra II, Geometry, Pre-Calculus Advanced Placement World History AP
        Environmental Science College prep STEM curriculum. Family moved to
        Tucson prior to my senior year – completed remaining requirements via
        COLE. Cumulative GPA in STEM curriculum (3.4 unweighted/4.2 weighted)
        Work Experience -College Level Tutoring - Precalculus, English,
        Psychology, and Algebra -Bas-I Kyokushin Karate; Miami, Florida
        2014-2018 Tutor and Karate Instructor As 2nd Degree Black Belt, I was
        responsible for teaching students about responsibility, discipline and
        the art of Kyokushin karate. Assisted younger students in reading,
        writing, science and math assignments/homework completion. -Military
        Basic Training (2 Months)- Medically discharged -Walmart Overnight
        Stocker(8 months) -forklift certified -in charge of organizing the back
        yard- lot 
        </div>
        Skills/Abilities - Self-starter, independent worker -Critical
        thinker – able to work through and solve issues -Organized and efficient
        -strive to constantly be better than i was yesterday
      </p>
    </div>
  );
}
