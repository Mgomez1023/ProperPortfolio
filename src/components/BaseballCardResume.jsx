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
            Passionate about software development, data science, and AI.
            I enjoy building projects that combine creativity and problem-solving.
          </p>
        </section>

        <section className="card-section">
          <h3>Education</h3>
          <ul>
            <li>B.S. in Computer Science – University of Illinois Chicago</li>
            <li>A.A.S. in Computer Science – Moraine Valley Community College</li>
          </ul>
        </section>

        <section className="card-section">
          <h3>Projects</h3>
          <ul>
            <li>AI Image Classifier</li>
            <li>Portfolio Website</li>
            <li>Vehicle Management System</li>
          </ul>
        </section>

        <section className="card-section">
          <h3>Experience</h3>
          <ul>
            <li>Software Intern – XYZ Corp</li>
            <li>Research Assistant – UIC CS Department</li>
            <li>Package Handler – UPS</li>
          </ul>
        </section>

        <section className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>Machine Learning</span>
            <span>PyTorch</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BaseballCardResume;
