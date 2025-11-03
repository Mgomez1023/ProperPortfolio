import React from "react";
import reactLogo from "../assets/react.svg";
import typescriptLogo from "../assets/typescript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import pythonLogo from "../assets/python-logo.png";
import moraineLogo from "../assets/Moraine.png";
import uicLogo from "../assets/download.png";
import profilePic from "../assets/image2.jpeg";

const FaceCard = () => {
  return (
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
  );
};

export default FaceCard;