import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import EmergencyButton from '../components/EmergencyButton';
import '../assets/css/EmergencyAssistance.css';

// Importar imágenes locales
import icon1 from '../assets/images/recursos1.png';
import icon2 from '../assets/images/recursos2.png';
import icon3 from '../assets/images/Recursos3.png';
import bgImage1 from '../assets/images/Rectangle 30.png';
import bgImage2 from '../assets/images/Rectangle 32.png';
import bgImage3 from '../assets/images/Rectangle 31.png';

const EmergencyAssistance = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`Botón ${buttonName} clickeado`);
    // Aquí la lógica de navegación o acción
  };

  return (
    <div className="container py-5">
      <BackgroundAnimation />
      
      <div className="container-main">
        <div className="header">
          <h1>¿Sabes cómo podemos ayudarte en una emergencia?</h1>
        </div>
        
        <div className="row">
          <div className="col-lg-6 mb-4">
            <EmergencyButton 
              color="azul"
              title="Beneficios Tecnológicos"
              icon={icon1}
              bgImage={bgImage1}
              onClick={() => handleButtonClick('azul')}
            />
          </div>
          
          <div className="col-lg-6 mb-4">
            <EmergencyButton 
              color="verde"
              title="Beneficios Tecnológicos"
              icon={icon2}
              bgImage={bgImage2}
              onClick={() => handleButtonClick('verde')}
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <EmergencyButton 
              color="rojo"
              title="Beneficios Tecnológicos"
              icon={icon3}
              bgImage={bgImage3}
              isFullWidth={true}
              onClick={() => handleButtonClick('rojo')}
            />
          </div>
        </div>
        
        <div className="footer">
          <p>Sistema de Respuesta a Emergencias © 2025 | Asistencia 24/7</p>
        </div>
      </div>
    </div>
  );
};
export default EmergencyAssistance;