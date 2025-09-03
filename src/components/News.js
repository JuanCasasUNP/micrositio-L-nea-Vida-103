// News.js - Componente principal
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsItem from './NewsItem';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/News.css';



const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 3;
  
  // Datos de ejemplo para las noticias
  const newsData = [
    {
      id: 1, // Añadir ID único
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 2, // Añadir ID único
      title: "En junio más de 47 mil llamadas fueron atendidas y solucionadas por la Línea Vida 103 de la UNP",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 3, // Añadir ID único
      title: "Familia acorralada por inundaciones es rescatada en Villavicencio: la intervención de la Línea Vida 103 y los organismos de socorro salvaron estas vidas",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 4, // Añadir ID único
      title: "Atentan contra activista político en Cauca: Línea Vida 103 y Policía Nacional brindan acompañamiento",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 5, // Añadir ID único
      title: "ESCOLTA DE LA UNP REPELE ATAQUE ARMADO EN KENNEDY",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 6, // Añadir ID único
      title: "Asaltan a organización de mujeres Afro en Cauca: Línea Vida 103 y Policía nacional gestionan protección",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 7, // Añadir ID único
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 8, // Añadir ID único
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 9, // Añadir ID único
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    {
      id: 10, // Añadir ID único
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "14 julio, 2025, 6:59 p.m.",
      location: "Cauca",
    },
    
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Navegar a detalle de noticia
  const handleNewsClick = (newsId) => {
    navigate(`/noticia/${newsId}`);
  };

  // Cambiar página
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Header */}
      <header className="news-header">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Noticias de La Linea Vida 103</h1>
          <p className="lead">Información actualizada sobre los acontecimientos más relevantes sobre la linea</p>
        </div>
      </header>

      {/* News Container */}
      <div className="container news-container">
        {/* News Items */}
        {currentItems.map((news) => (
        <NewsItem 
          key={news.id}
          id={news.id}
          title={news.title}
          image={news.image}
          date={news.date}
          location={news.location}
          onNewsClick={handleNewsClick}
        />
      ))}
        
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default News;