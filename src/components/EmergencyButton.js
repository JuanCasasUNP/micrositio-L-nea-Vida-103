
import React, { useRef, useEffect } from 'react';
import '../assets/css/EmergencyAssistance.css';

const EmergencyButton = ({ 
  color, 
  title, 
  icon, 
  bgImage, 
  isFullWidth = false,
  onClick 
}) => {
  // Estilos en línea para la imagen de fondo
  const buttonStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div 
      className={`emergency-button ${isFullWidth ? 'full-width' : ''}`}
      style={buttonStyle}
      onClick={onClick}
    >
      <div className={`overlay ${color}`}></div>
      <div className="row h-100">
        <div className="content d-flex align-items-center w-100">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="icon">
              <img src={icon} alt={title} />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyButton;