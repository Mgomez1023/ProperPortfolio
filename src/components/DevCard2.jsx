import React from "react";
import "./DevCard.css";
import "./BaseballCardResume.css";
import profilePic from "../assets/image2.jpeg";
import moraineLogo from "../assets/Moraine.png";
import uicLogo from "../assets/download.png";
import BaseballCardResume from "./BaseballCardResume";

function DevCard2({ isFlipped }) {

  return (
    <div className="card-container">

        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>

            <div className="card-front">
                <div className="dev-card">
                        {/* Dev Card Front */}
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>

                        <div className="photo-frame">
                        <img src={profilePic} alt="Developer" className="profile-photo" />
                        </div>


                    <div className="name-section">
                        <h2 className="name">MARTIN GOMEZ</h2>
                        <p className="subtitle">REACT DEVELOPER</p>
                    </div>

                    <div className="logo-row">
                        <img src={moraineLogo} alt="React" className="tech-logo" />
                        <img src={uicLogo} alt="JavaScript" className="tech-logo" />
                    </div>

                </div>
            </div>

            <div className="card-back">
                {/* The back of your card */}
                <BaseballCardResume />
            </div>
        </div>

    </div>
  );
};

export default DevCard2;