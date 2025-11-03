import React from "react";
import "./DevCard.css";
import "./BaseballCardResume.css";
import BaseballCardResume from "./BaseballCardResume";
import ProjectCard from "./projectCard.jsx"
import FaceCard from "./faceCard";


function DevCard2({ cardIndex }) {

  return (
    <div className="card-container">

        <div className={`card-inner card-${cardIndex}`}>

            {/* --- CARD 1: Front --- */}
            <div className="card-face card-front">
                <FaceCard />
            </div>

            {/* --- CARD 2: Back / Resume --- */}
            <div className="card-face card-back">
                {/* The back of your card */}
                <BaseballCardResume />
            </div>

            {/* --- CARD 3: Third / Projects --- */}
            <div className=" card-face card-third">
                <ProjectCard />
            </div>
            
            
        </div>

    </div>
  );
};

export default DevCard2;