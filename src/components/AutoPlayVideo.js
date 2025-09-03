import React, { useRef, useEffect } from 'react';
import  '../assets/css/AutoPlayVideo.css';
import videoSrc from '../assets/Video/Colibri-linea_1.mp4'; 

const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Configurar el video para autoreproducirse y loop
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Error al reproducir automáticamente:', error);
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="media-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-container">
              <video
                ref={videoRef}
                className="auto-play-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Overlay con información opcional */}
              <div className="video-overlay">
                <div className="overlay-content">
                  <h3>Línea de Emergencias</h3>
                  <p>Asistencia 24/7 para toda la comunidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPlayVideo;