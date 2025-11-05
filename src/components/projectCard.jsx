import React from "react";
import reactLogo from "../assets/react.svg";
import typescriptLogo from "../assets/typescript.png";
import profilePic from "../assets/image2.jpeg";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import pythonLogo from "../assets/python-logo.png";
import EatThisLogo from "../assets/icon-192x192.png";
import StatsTracker from "../assets/192x192.png";
import LoanerVehicle from "../assets/loanerVehicle.jpg";
import { FaWordpressSimple } from 'react-icons/fa';

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <header className="project-card-header">
          <img src={profilePic} className="profile-pic" />
          <div className="project-header-text">
            <h1>Martin Gomez</h1>
            <h2>Computer Science Major</h2>
          </div>
        </header>

        <section className="project-card-section">
          <h3>Projects</h3>


          
          <div className="project-listing">
            <div className="project-listing-header">
              <h2 className="project-title">Loaner Vehicle Management System</h2>

              <div className="project-skills-grid">
                <div className="project-skills-inner">
                  <div className="project-skills-track">
                  <span className="project-React">
                  <FaWordpressSimple className="icon"/>
                    WordPress
                  </span>
                  <span className="project-Javascript">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
                    Google Apps Script
                  </span>
                  <span className="project-HTML">
                    <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
                    JQuery
                  </span>
                  <span className="project-Python">
                    <img src={pythonLogo} alt="Python Logo" className="project-skill-logo" />
                    Elementor
                  </span>
                  </div>
                  {/* Duplicate the track for a seamless looping scroll */}
                  <div className="project-skills-track" aria-hidden="true">
                  <span className="project-React">
                    <img src={reactLogo} alt="React Logo" className="project-skill-logo" />
                    WordPress
                  </span>
                  <span className="project-Javascript">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
                    Google Sheets
                  </span>
                  <span className="project-HTML">
                    <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
                    JQuery
                  </span>
                  <span className="project-CSS">
                    <img src={cssLogo} alt="CSS Logo" className="project-skill-logo" />
                    Elementor
                  </span>

                  </div>
                </div>
              </div>
            </div>


            <div className="project-listing-content">

              <p className="project-paragraph"> A vehicle management system that 
                allowed customers to check in and out vehicles, and allowed a 
                local business to log custumer data.  
              </p>
              <img className="loaner-listing-photo" src={LoanerVehicle} alt="EatThis Logo" />

            </div>

          </div>

          <div className="project-listing">
            <div className="project-listing-header">
              <h2 className="project-title">EatThis - Food Picker</h2>

              <div className="project-skills-grid">
                <div className="project-skills-inner">
                  <div className="project-skills-track">
                  <span className="project-React">
                    <img src={reactLogo} alt="React Logo" className="project-skill-logo" />
                    React
                  </span>
                  <span className="project-Javascript">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
                    Vite
                  </span>
                  <span className="project-HTML">
                    <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
                    TailWind CSS
                  </span>
                  <span className="project-CSS">
                    <img src={cssLogo} alt="CSS Logo" className="project-skill-logo" />
                    Vercel
                  </span>
                  <span className="project-Python">
                    <img src={pythonLogo} alt="Python Logo" className="project-skill-logo" />
                    Git
                  </span>
                  </div>
                  {/* Duplicate the track for a seamless looping scroll */}
                  <div className="project-skills-track" aria-hidden="true">
                  <span className="project-React">
                    <img src={reactLogo} alt="React Logo" className="project-skill-logo" />
                    React
                  </span>
                  <span className="project-Javascript">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
                    Vite
                  </span>
                  <span className="project-HTML">
                    <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
                    TailWind CSS
                  </span>
                  <span className="project-CSS">
                    <img src={cssLogo} alt="CSS Logo" className="project-skill-logo" />
                    Vercel
                  </span>
                  <span className="project-Python">
                    <img src={pythonLogo} alt="Python Logo" className="project-skill-logo" />
                    Git
                  </span>
                  </div>
                </div>
              </div>
 
            </div>

            <div className="project-listing-content">

              <p className="project-paragraph"> An app designed to make a food choice. 
              EatThis uses React and API calls to make a user-friendly local 
              restaurant picker.
              </p>
              <img className="listing-photo" src={EatThisLogo} alt="EatThis Logo" />

            </div>


          </div>  

         <div className="project-listing">
            <div className="project-listing-header">
              <h2 className="project-title">Baseball Stats Tracker</h2>

              <div className="project-skills-grid">
                <div className="project-skills-inner">
                  <div className="project-skills-track">
                  <span className="project-React">
                    <img src={reactLogo} alt="React Logo" className="project-skill-logo" />
                    React
                  </span>
                  <span className="project-Javascript">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="project-skill-logo" />
                    Vite
                  </span>
                  <span className="project-HTML">
                    <img src={htmlLogo} alt="HTML Logo" className="project-skill-logo" />
                    Node.JS
                  </span>
                  <span className="project-CSS">
                    <img src={cssLogo} alt="CSS Logo" className="project-skill-logo" />
                    Vercel
                  </span>
                  <span className="project-Python">
                    <img src={pythonLogo} alt="Python Logo" className="project-skill-logo" />
                    Git
                  </span>
                  </div>
                  {/* Duplicate the track for a seamless looping scroll */}
                  <div className="project-skills-track" aria-hidden="true">
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
                </div>
              </div>
 
            </div>

            <div className="project-listing-content">

              <p className="project-paragraph">A progressive web app designed to help 
              local teams and players track their personal stats throughout a season
              </p>
              <img className="listing-photo" src={StatsTracker} alt="StatTracker Logo" />

            </div>

          </div>  
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;