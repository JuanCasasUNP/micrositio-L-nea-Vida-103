import React from 'react';
import '../assets/css/styles.css'; // Importamos el CSS global
const TopBar = () => {
  const handleTranslate = () => {
    // Función para cambiar el idioma
    console.log('Cambiar idioma');
  };
  return (
    <nav className="navbar navbar-expand-lg barra-superior-govco" aria-label="Barra superior">
      <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer" aria-label="Portal del Estado Colombiano - GOV.CO"></a>
      <button 
        className="idioma-icon-barra-superior-govco float-right" 
        aria-label="Button to change the language of the page to English"
        onClick={handleTranslate}
      ></button>
    </nav>
  );
};
export default TopBar;