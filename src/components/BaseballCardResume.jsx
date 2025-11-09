import React from "react";
import reactLogo from "../assets/react.svg";
import typescriptLogo from "../assets/typescript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import pythonLogo from "../assets/python-logo.png";
import profilePic from "../assets/ProSelfieEdit.jpeg";
import CLogo from "../assets/C.png";
import { FaWordpress } from "react-icons/fa";


import "./BaseballCardResume.css";

const BaseballCardResume = () => {
  return (
    <div className="baseball-card-container">
      <div className="baseball-card">
          <header className="card-header">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="header-text">
              <h1>Martin Gomez</h1>
              <h2>Computer Science Major</h2>
            </div>
          </header>

          <section className="education">
            <h3>Education</h3>
            <ul>
              <li>B.S Computer Science – University of Illinois Chicago</li>
              <li>A.A.S. Computer Science – Moraine Valley Community College</li>
            </ul>
          </section>

          {/* 
          
            <section className="card-section">
              <h3>Projects</h3>
              <ul>
                <li>Vehicle Management System</li>
                <li>EatThis - Food Picker</li>
                <li>Baseball Stats Tracker</li>
              </ul>
            </section>
          
          */}

          <section className="card-section">
            <h3>Work Experience</h3>
            <ul>
              <li>Chicago Tire and Auto - Software Developer</li>
              <li>UPS - Package Handler</li>
              <li>Walmart - Cashier</li>
            </ul>
          </section>

          <section className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span className="React">
                <img src={reactLogo} alt="React Logo" className="skill-logo" />
                React
              </span>
              <span className="Python">
                <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
                Python</span>
              <span className="C">
                <img src={CLogo} alt="HTML Logo" className="skill-logo" />
                C/C++
              </span>
              <span className="Javascript">
                <img src={ typescriptLogo } alt="TypeScript Logo" className="skill-logo" />
                TypeScript
              </span>
              <span className="CSS">
                <img src={cssLogo} alt="CSS Logo" className="skill-logo" />
                CSS</span>
              <span className="HTML">
                <img src={htmlLogo} alt="HTML Logo" className="skill-logo" />
                HTML
              </span>
              <span className="React">
                <FaWordpress className="skill-logo" />
                WordPress
              </span>


            </div>
          </section>

          {/* 
          
          <section className="bio">
            <p>
              Passionate about software development, AI, and Baseball.
              I enjoy building projects that combine creativity and usability.
            </p>
          </section>
          
          */}


      </div>
    </div>
  );
};

export default BaseballCardResume;
