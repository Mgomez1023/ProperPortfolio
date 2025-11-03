import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseballCardResume from './components/BaseballCardResume.jsx'
import DevCard from './components/DevCard.jsx'
import DevCard2 from './components/DevCard2.jsx'
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleBack = () => setIsFlipped(false);
  const handleNext = () => setIsFlipped(true);


  return (
    <div className="app-container">
      {/* This is the flipping card */}
      <DevCard2 isFlipped={isFlipped} />

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={!isFlipped}>
          ◀ Back
        </button>
        <button onClick={handleNext} disabled={isFlipped}>
          Next ▶
        </button>
      </div>
    </div>
  )
}

export default App
