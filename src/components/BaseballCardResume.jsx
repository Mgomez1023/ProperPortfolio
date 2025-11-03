import React from "react";
import profilePic from "../assets/image2.jpeg";
import "./BaseballCardResume.css";

const BaseballCardResume = () => {
  return (
    <div className="card-container">
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

        <section className="bio">
          <p>
            Passionate about software development, AI, and Baseball.
            I enjoy building projects that combine creativity and usability.
          </p>
        </section>

        <section className="card-section">
          <h3>Education</h3>
          <ul>
            <li>B.S Computer Science – University of Illinois Chicago</li>
            <li>A.A.S. Computer Science – Moraine Valley Community College</li>
          </ul>
        </section>

        <section className="card-section">
          <h3>Projects</h3>
          <ul>
            <li>Vehicle Management System</li>
            <li>EatThis - Food Picker</li>
            <li>Baseball Stats Tracker</li>
          </ul>
        </section>

        <section className="card-section">
          <h3>Work Experience</h3>
          <ul>
            <li>Software Engineer Intern - Chicago Tire and Auto</li>
            <li>Package Handler – UPS</li>
          </ul>
        </section>

        <section className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span className="React">React</span>
            <span className="Javascript">TypeScript</span>
            <span className="HTML">HTML</span>
            <span className="CSS">CSS</span>
            <span className="Python">Python</span>

          </div>
        </section>
      </div>
    </div>
  );
};

export default BaseballCardResume;
