import React from 'react';

import useRainbowMode from '../hooks/useRainbowMode';

const RainbowToggle = () => {
  const [rainbowMode, setRainbowMode] = useRainbowMode(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setRainbowMode(!rainbowMode);
  };
  return (
    <nav className="navbar">
      <div className="toggle-div">
        <h1>Toggle Rainbow Background</h1>
        <div className="rainbow-mode__toggle">
          <div data-testid = "button" onClick={toggleMode} className={rainbowMode ? 'toggle toggled' : 'toggle'} />
        </div>
      </div>
    </nav>
  );
};

export default RainbowToggle;
