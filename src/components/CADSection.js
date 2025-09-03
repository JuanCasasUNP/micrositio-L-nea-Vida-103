import React from 'react';
import '../assets/css/CADSection.css';
import mapaImage from '../assets/images/mapa.png';

const CADSection = () => {
  return (
    <div className="main-container">
      <div className="custom-container">
        <div className="container-bg"></div>
        <div className="overlay-pattern"></div>
        
        <div className="content-wrapper">
          <div className="text-container">
            <div className="title-section">
              <h2><span>Centros Automaticos de Despacho - CAD</span></h2>
              
              <div className="cap-description">
                <p>"El CAD es un centro de servicio para la aplicación del sistema de justicia policiva. En su operación en alianza con la Unidad Nacional Protección por medio de la Línea Vida 103 busca mejorar las respuestas inmediatas a las emergencias de los ciudadanos así como ser una alternativa real en temas de seguridad, gracias a la tecnología de punto en geolocalización y grabación en tiempo real."</p>
              </div>
            </div>
            
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-title">CAD por departamento</div>
                <div className="stat-description">Centros de Atención Distribuidos estratégicamente</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-title">CAD distribuidos</div>
                <div className="stat-description">Cobertura en todo el territorio nacional</div>
              </div>
            </div>
          </div>
          
          <div className="image-container2">
            <div className="featured-image">
              <img src={mapaImage} alt="Distribución de CAP" className="featured-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CADSection;