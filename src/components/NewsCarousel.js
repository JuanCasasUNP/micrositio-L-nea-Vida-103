import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/NewsCarousel.css';

// Importar imágenes
import image1 from '../assets/images/Rectangle 12.png';
import image2 from '../assets/images/Rectangle 13.png';
import image3 from '../assets/images/Rectangle 14.png';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems = [
    {
      id: 1,
      image: image1,
      title: "Noticia destacada 1",
      description: "Ejemplo de descripción de noticia",
      buttonText: "Ver más"
    },
    {
      id: 2,
      image: image2,
      title: "Noticia destacada 2",
      description: "Ejemplo de descripción de noticia",
      buttonText: "Ver noticia"
    },
    {
      id: 3,
      image: image3,
      title: "Noticia destacada 3",
      description: "Ejemplo de descripción de noticia",
      buttonText: "Ver noticia"
    },
    {
      id: 4,
      image: image1,
      title: "Noticia destacada 4",
      description: "Ejemplo de descripción de noticia",
      buttonText: "Ver noticia"
    }
  ];

  return (
    <div className="container news-container">
      <div className="title-section">
        <h2><span>Conoce las últimas noticias</span></h2>
      </div>
      
      <Carousel 
        id="responsiveCarousel" 
        className="custom-carousel"
        indicators={true}
        controls={true}
        interval={3000}
        activeIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      >
        {newsItems.map((item, index) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 carousel-img"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="btn btn-primary btn-custom">
                {item.buttonText}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;