import React from 'react';
import '../assets/css/EmergencyAssistance.css';

const BackgroundAnimation = () => {
  return (
    <div className="bg-animation">
      <div className="pulse" style={{ top: '20%', left: '15%', width: '300px', height: '300px', animationDelay: '0s' }}></div>
      <div className="pulse" style={{ top: '70%', left: '80%', width: '200px', height: '200px', animationDelay: '1s' }}></div>
      <div className="pulse" style={{ top: '40%', left: '60%', width: '250px', height: '250px', animationDelay: '2s' }}></div>
      <div className="pulse" style={{ top: '60%', left: '30%', width: '350px', height: '350px', animationDelay: '3s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;