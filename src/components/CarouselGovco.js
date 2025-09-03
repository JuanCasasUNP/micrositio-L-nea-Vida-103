import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // ¡IMPORTANTE! Agregar esto
import imagen1 from '../assets/images/imagen actualizada.png';
import imagen2 from '../assets/images/imagen actualizada1.png';
import imagen3 from '../assets/images/imagen actualizada2.png';


const CarouselGovco = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);
  const carouselRef = useRef(null);
  const carouselInstance = useRef(null);

  // Datos del carrusel
  const slides = [
    { 
      id: 1, 
      title: "Título Slide 1", 
      description: "Descripción del slide 1",
      image: imagen1,
      link: "#"
    },
    { 
      id: 2, 
      title: "Título Slide 2", 
      description: "Descripción del slide 2",
      image: imagen2,
      link: "#"
    },
    { 
      id: 3, 
      title: "Título Slide 3", 
      description: "Descripción del slide 3",
      image: imagen3,
      link: "#"
    },
  ];

  // 1. Efecto para inicializar el carrusel
  useEffect(() => {
    // Asegurarnos de que Bootstrap está cargado
    if (window.bootstrap) {
      carouselInstance.current = new window.bootstrap.Carousel(carouselRef.current, {
        interval: isPlaying ? 2000 : false,
        wrap: true
      });
    } else {
      console.error("Bootstrap no está cargado correctamente");
    }

    return () => {
      if (carouselInstance.current) {
        carouselInstance.current.dispose();
      }
    };
  }, []);

  // 2. Efecto para play/pause
  useEffect(() => {
    if (!carouselInstance.current) return;
    
    if (isPlaying) {
      carouselInstance.current.cycle();
    } else {
      carouselInstance.current.pause();
    }
  }, [isPlaying]);

  // 3. Efecto para responsividad
  useEffect(() => {
    const checkResponsive = () => {
      setIsResponsive(window.innerWidth < 652);
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    return () => {
      window.removeEventListener('resize', checkResponsive);
    };
  }, []);

  // 4. Efecto para accesibilidad (tabindex)
  useEffect(() => {
    const updateTabIndex = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      
      const activeSlide = carousel.querySelector('.carousel-item.active a');
      const inactiveSlides = carousel.querySelectorAll('.carousel-item:not(.active) a');
      
      if (activeSlide) activeSlide.tabIndex = 0;
      inactiveSlides.forEach(slide => slide.tabIndex = -1);
    };

    // Actualizar al cambiar slide
    const handleSlideChange = () => {
      updateTabIndex();
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener('slid.bs.carousel', handleSlideChange);
      updateTabIndex(); // Inicial
    }
    
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('slid.bs.carousel', handleSlideChange);
      }
    };
  }, []);

  // Toggle play/pause
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div 
      id="carouselExampleGovco1" 
      ref={carouselRef}
      className={`carousel slide carousel-fade carrusel-govco ${isResponsive ? 'responsive-carrusel-govco' : ''}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            data-bs-interval="2000"
          >
            <a 
              href={slide.link} 
              title={slide.title}
              tabIndex={index === 0 ? 0 : -1}
              aria-label={`Ver ${slide.title}`}
            >
              <img 
                src={slide.image} 
                alt={slide.description} 
                className="d-block w-100"
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button 
        className="carousel-control-prev" 
        type="button"
        data-bs-target="#carouselExampleGovco1"
        data-bs-slide="prev"
        aria-label="Imagen anterior"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior imagén</span>
      </button>
      
      <button 
        className="carousel-control-next" 
        type="button"
        data-bs-target="#carouselExampleGovco1"
        data-bs-slide="next"
        aria-label="Próxima imagen"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próxima imagen</span>
      </button>

      {/* Controles de reproducción */}
      <div className="control-start-pause">
        <button 
          className={`controls start ${!isPlaying ? 'active' : ''}`} 
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Reanudar carrusel" : "Reproducir carrusel"}
        >
          <span>Reproducir</span>
        </button>
        
        <button 
          className={`controls pause ${isPlaying ? 'active' : ''}`} 
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar carrusel" : "Carrusel en pausa"}
        >
          <span>Pausar</span>
        </button>
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleGovco1"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselGovco;