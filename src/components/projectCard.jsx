import React from "react";
import reactLogo from "../assets/react.svg";
import typescriptLogo from "../assets/typescript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import pythonLogo from "../assets/python-logo.png";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <header className="project-card-header">
          <div className="project-header-text">
            <h1>Martin Gomez</h1>
            <h2>Computer Science Major</h2>
          </div>
        </header>

        <section className="project-bio">
          <p>
            Passionate about software development, AI, and Baseball.
            I enjoy building projects that combine creativity and usability.
          </p>
        </section>

        <section className="project-card-section">
          <h3>Projects</h3>
          <ul>
            <li>Vehicle Management System</li>
            <li>EatThis - Food Picker</li>
            <li>Baseball Stats Tracker</li>
          </ul>
        </section>

        <section className="project-card-section">
          <h3>Work Experience</h3>
          <ul>
            <li>Software Engineer Intern - Chicago Tire and Auto</li>
            <li>Package Handler – UPS</li>
          </ul>
        </section>

        <section className="project-skills-section">
          <h3>Skills</h3>
          <div className="project-skills-grid">
            <span className="project-React">
              <img src={reactLogo} alt="React Logo" className="project-skill-logo" />
              React
            </span>
            <span className="project-Javascript">
              <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
              TypeScript
            </span>
            <span className="project-HTML">
              <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
              HTML
            </span>
            <span className="project-CSS">
              <img src={cssLogo} alt="CSS Logo" className="project-skill-logo" />
              CSS
            </span>
            <span className="project-Python">
              <img src={pythonLogo} alt="Python Logo" className="project-skill-logo" />
              Python
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;