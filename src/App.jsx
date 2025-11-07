import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseballCardResume from './components/BaseballCardResume.jsx'
import DevCard from './components/DevCard.jsx'
import DevCard2 from './components/DevCard2.jsx'
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";import './App.css'
import { Analytics } from "@vercel/analytics/react";

// Ensure ProjectCard styles are included in production builds (avoid potential case/tree-shake issues)
import './components/ProjectCard.css'

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  const handleNext = () => setCardIndex((prev) => Math.min(prev + 1, 2));
  const handleBack = () => setCardIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="app-container">
      {/* Fixed social icons (replace URLs with your profiles) */}
      <div className="top-right-icons" aria-hidden={false}>
        <a href="https://github.com/Mgomez1023" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/martin-gomez-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        {/* Resume download button — place a file named `resume.pdf` in the public/ folder */}
        <a href="/MartinGomez_Resume.pdf" download className="resume-btn" aria-label="Download Resume">
          <span>Resume</span>
          <MdOutlineFileDownload style={{ marginLeft: 8, }} />
        </a>
      </div>
      {/* This is the flipping card */}
      <div className="card-container">
        <DevCard2 cardIndex={cardIndex} /> 
        <Analytics />

        {/* Navigation buttons */}
        <div className="navigation-buttons">
          <button onClick={handleBack} disabled={cardIndex == 0}>
             <FaChevronLeft />Back
          </button>
          <button onClick={handleNext} disabled={cardIndex == 2}>
            Flip <FaChevronRight />
          </button>
        </div>
      </div>


    </div>
  )
}

export default App
