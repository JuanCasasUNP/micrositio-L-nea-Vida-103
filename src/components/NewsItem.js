// NewsItem.js
import React from 'react';

const NewsItem = ({ id, title, image, date, location, onNewsClick }) => {
  return (
    <div className="news-item">
      <div className="news-content">
        <div className="location-info">
          <i className="bi bi-geo-alt"></i> {location}
        </div>
        <h2 className="news-title">{title}</h2>
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="news-date">
            <i className="bi bi-calendar"></i> {date}
          </span>
          <button 
            className="read-more"
            onClick={() => onNewsClick(id)}
          >
            Leer más <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="news-image-container">
        <img 
          src={image || "https://via.placeholder.com/600x400/ecf0f1/2c3e50?text=Punto+Vida+Cauca"} 
          alt={title} 
          className="news-image" 
        />
      </div>
    </div>
  );
};

export default NewsItem;