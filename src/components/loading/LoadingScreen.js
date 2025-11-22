import React from "react";
import "./LoadingScreen.css";
import Logo from "../logo/Logo";

const LoadingScreen = ({ theme, isFadingOut }) => {
  return (
    <div 
      className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`} 
      style={{ backgroundColor: theme.body }}
    >
      <div className="loading-content">
        <div className="loading-logo-container">
          <Logo className="loading-logo-container" animated variant="loader" />
        </div>
        <div className="loading-text" style={{ color: theme.text }}>
          <div className="loading-spinner"></div>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

