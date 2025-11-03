import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseballCardResume from './components/BaseballCardResume.jsx'
import DevCard from './components/DevCard.jsx'
import DevCard2 from './components/DevCard2.jsx'
import './App.css'
// Ensure ProjectCard styles are included in production builds (avoid potential case/tree-shake issues)
import './components/ProjectCard.css'

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  const handleNext = () => setCardIndex((prev) => Math.min(prev + 1, 2));
  const handleBack = () => setCardIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="app-container">
      {/* This is the flipping card */}
      <DevCard2 cardIndex={cardIndex} />

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={cardIndex == 0}>
          ◀ Back
        </button>
        <button onClick={handleNext} disabled={cardIndex == 2}>
          Flip ▶
        </button>
      </div>
    </div>
  )
}

export default App
