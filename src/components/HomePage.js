import React from 'react';
import CarouselGovco from './CarouselGovco';
const HomePage = () => {
  const images = [
    {
      src: "https://govco-prod-webutils.s3.amazonaws.com/uploads/fondo-gris-carrusel.jpg",
      alt: "Descripción imagen 1",
      title: "Título imagen 1",
      link: "#"
    },
    // ... más imágenes
  ];
  return (
    <div>
      <CarouselGovco images={images} />
    </div>
  );
};
export default HomePage;