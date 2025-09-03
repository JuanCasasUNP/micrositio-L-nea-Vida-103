import React, { useState } from 'react';
import '../assets/css/styles.css';
const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleCleanSearch = () => {
    setSearchValue('');
    setSearchActive(false);
  };
  const handleFocusSearch = () => {
    setSearchActive(true);
  };
  const handleBlurSearch = () => {
    // Retrasamos para permitir el clic en las opciones
    setTimeout(() => setSearchActive(false), 200);
  };
  return (
    <div className="logo-aut-header-govco">
      <a href="#" className="link-login-header-govco">Iniciar sesión</a>
      <div className="container-logo-header-govco">
        <span className="Logo-Línea-VIDA-01"></span>
        <div className="container-search-header-govco">
          <div className={`search-govco ${searchActive ? 'active' : ''}`}>
            <div className={`bar-search-govco ${searchValue ? 'exist-content' : ''}`}>
              <input 
                type="text" 
                placeholder="Buscar por componente" 
                className="input-search-govco" 
                aria-label="Buscador"
                value={searchValue}
                onChange={handleSearchChange}
                onFocus={handleFocusSearch}
                onBlur={handleBlurSearch}
              />
              {searchValue && (
                <button 
                  className="icon-search-govco icon-close-search-govco" 
                  aria-label="Limpiar"
                  onClick={handleCleanSearch}
                ></button>
              )}
              <div className="icon-search-govco search-icon-search-govco" aria-hidden="true"></div>
            </div>
            {searchActive && (
              <div className="container-options-search-govco">
                <div className="options-search-govco">
                  <ul>
                    <li><a href="#" tabIndex="-1">Sugerencia de búsqueda con la palabra <strong>Componente 1</strong></a></li>
                    <li><a href="#" tabIndex="-1">Sugerencia de búsqueda con la palabra <strong>Componente 1</strong></a></li>
                    <li><a href="#" tabIndex="-1">Sugerencia de búsqueda con la palabra <strong>Componente 1</strong></a></li>
                    <li><a href="#" tabIndex="-1">Sugerencia de búsqueda con la palabra <strong>Componente 1</strong></a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;