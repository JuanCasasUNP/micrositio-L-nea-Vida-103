import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/styles.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Inicio');
  const location = useLocation();
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="container-navbar-menu-govco blue-menu-govco">
      <nav className="navbar navbar-expand-lg navbar-menu-govco" role="navigation" aria-label="Menú ejemplo entidad">
        <div className="container-fluid container-second-navbar-menu-govco">
          <Link className="navbar-brand navbar-toggler icon-entidad-menu-govco" to="/"></Link>
          <button className="navbar-toggler button-responsive-menu-govco collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bars-menu-govco"></span>
          </button>
          <div className="collapse navbar-collapse navbar-collapse-menu-govco" id="navbarScroll">
            <div className="container-search-icon-menu-govco navbar-toggler">
              <div className="search-govco">
                <div className="bar-search-govco">
                  <input type="text" placeholder="Buscar por componente" className="input-search-govco" aria-label="Buscador" />
                  <button className="icon-search-govco icon-close-search-govco" aria-label="Limpiar"></button>
                  <div className="icon-search-govco search-icon-search-govco" aria-hidden="true"></div>
                </div>
              </div>
              <a className="icon-user-alt-menu-govco" href="#"></a>
            </div>
            <ul className="navbar-nav navbar-nav-menu-govco ms-auto">
              {/* Inicio */}
              <li className="nav-item">
                <Link 
                  className={`nav-link dir-menu-govco ${location.pathname === '/' ? 'active' : ''}`} 
                  to="/"
                  onClick={() => handleItemClick('Inicio')}
                >
                  <span className="text-item-menu-govco">Inicio</span>
                </Link>
              </li>
              
              {/* Transparencia */}
              <li className="nav-item">
                <a 
                  className={`nav-link dir-menu-govco ${activeItem === 'Nuestra operacion' ? 'active' : ''}`} 
                  href="#"
                  onClick={() => handleItemClick('Nuestra operacion')}
                >
                  <span className="text-item-menu-govco">Nuestra operacion</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link dir-menu-govco ${activeItem === 'Nuestros consejos' ? 'active' : ''}`} 
                  href="#"
                  onClick={() => handleItemClick('Nuestros consejos')}
                >
                  <span className="text-item-menu-govco">Nuestros consejos</span>
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link dir-menu-govco ${activeItem === 'Quienes somos' ? 'active' : ''}`} 
                  href="#"
                  onClick={() => handleItemClick('Quienes somos')}
                >
                  <span className="text-item-menu-govco">Quienes somos</span>
                </a>
              </li>
              
              {/* Sala de prensa - Enlace a noticias */}
              <li className="nav-item">
                <Link 
                  className={`nav-link dir-menu-govco ${location.pathname === '/noticias' ? 'active' : ''}`} 
                  to="/noticias"
                  onClick={() => handleItemClick('Sala de prensa')}
                >
                  <span className="text-item-menu-govco">Sala de prensa</span>
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <a 
                  className="nav-link" 
                  href="#" 
                  id="navbarDropdown1" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <span className="container-text-icon-menu-govco">
                    <span className="text-item-menu-govco">Salva tu vida</span>
                    <span className="govco-angle-down"></span>
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item dir-menu-govco" href="#">Trámites</a></li>
                  <li><a className="dropdown-item dir-menu-govco" href="#">Trámites</a></li>
                  <li><a className="dropdown-item dir-menu-govco" href="#">Trámites</a></li>
                  <li><a className="dropdown-item dir-menu-govco" href="#">Trámites</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;