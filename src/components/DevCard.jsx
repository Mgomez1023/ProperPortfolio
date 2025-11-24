import React from "react";
import "./DevCard2.css";
import profilePic from "../assets/Action2.jpeg";
import moraineLogo from "../assets/MoraineEdit.png";
import uicLogo from "../assets/download.png";

const DevCard = () => {
  return (
    <div className="dev-card">
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
  );
};

export default DevCard;
