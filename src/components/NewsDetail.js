// components/NewsDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Datos de las noticias (en un caso real, esto vendría de una API)
  const newsData = {
    1: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un “Punto Vida” de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "12 de Mayo, 2023",
      description: "Son el núcleo operativo de la Línea Vida 103. Desde estos centros, articuladores capacitados reciben, validan y coordinan en tiempo real cada emergencia reportada. Con tecnología avanzada y geolocalización, los CAD permiten activar una respuesta rápida y precisa en cualquier parte del país, garantizando protección efectiva para quienes más lo necesitan.",
      image: "",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: ""
      },
      content: `
        <p>El programa "Jóvenes con Propósito", implementado por Línea Vida 103 en colaboración con el Ministerio de Educación, ha demostrado una reducción del 40% en casos de depresión severa entre adolescentes en los primeros seis meses de aplicación.</p>
        
        <p>La iniciativa, que comenzó como un piloto en 15 instituciones educativas, se ha expandido ahora a 45 colegios adicionales gracias a los resultados positivos. El programa combina sesiones de terapia grupal, talleres de desarrollo de habilidades emocionales y un sistema de acompañamiento entre pares.</p>
        
        <p>"Estamos presenciando un cambio transformador en cómo los jóvenes enfrentan sus desafíos emocionales", explicó el Dr. Mendez durante la presentación de resultados. "El componente más efectivo ha sido la creación de redes de apoyo entre los mismos estudiantes, lo que ha normalizado la conversación sobre salud mental".</p>
        
        <p>Los datos recogidos muestran que, además de la reducción en casos de depresión, se registró un aumento del 60% en la búsqueda de ayuda profesional cuando los estudiantes experimentaban pensamientos negativos persistentes.</p>
        
        <p>El éxito del programa ha llamado la atención de autoridades educativas de regiones vecinas, que ya han solicitado capacitación para implementar metodologías similares en sus distritos.</p>
        
        <p>Para el segundo semestre del año, se espera que el programa llegue a至少 100 instituciones educativas más, con el objetivo de crear una red nacional de prevención y apoyo en salud mental adolescente.</p>
      `
    },
    2: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    3: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    4: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    5: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    6: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    7: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    8: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    9: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    10: {
      title: "El director de la UNP y el presidente Gustavo Petro inauguraron un 'Punto Vida' de la Red Integrada de Comunicaciones en Caloto – Cauca 1",
      date: "28 Julio, 2023",
      description: "Inauguración oficial del 'Punto Vida' en el municipio de Caloto, Cauca.",
      image: "https://via.placeholder.com/1200x600/3498db/ffffff?text=Inauguración+Punto+Vida",
      author: {
        name: "Por Lisa María Palacios Infante",
        role: "Equipo de comunicaciones de linea vida 103",
        image: "https://via.placeholder.com/72x72/2c3e50/ffffff?text=OP"
      },
      content: `
        <p>El presidente Gustavo Petro, junto con el director de la Unidad Nacional de Protección (UNP), 
        inauguraron oficialmente el 'Punto Vida' en el municipio de Caloto, Cauca. Esta importante 
        infraestructura forma parte de la Red Integrada de Comunicaciones que busca fortalecer la 
        seguridad y la conectividad en la región.</p>
        
        <h3>Beneficios para la comunidad</h3>
        <p>El Punto Vida servirá como centro de coordinación para las autoridades y como espacio de 
        acceso a servicios digitales para la comunidad. Entre los servicios que se ofrecerán se 
        encuentran:</p>
        <ul>
          <li>Atención prioritaria en emergencias</li>
          <li>Acceso a internet gratuito</li>
          <li>Puntos de recarga para dispositivos móviles</li>
          <li>Orientación sobre servicios del gobierno</li>
        </ul>
        
        <h3>Compromiso con la seguridad</h3>
        <p>El presidente Petro destacó que estos puntos son fundamentales para la política de 
        "Paz Total" y forman parte del esfuerzo del gobierno por llevar presencia institucional 
        a todas las regiones del país.</p>
      `
    },
    // ... puedes agregar más noticias aquí
  };

  const news = newsData[id];

  if (!news) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Noticia no encontrada</div>
        <button className="btn btn-primary" onClick={() => navigate('/noticias')}>
          Volver a noticias
        </button>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      {/* Botones de navegación */}
      <div className="container mt-3">
        <button 
          className="btn btn-outline-secondary me-2"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-house me-2"></i>Inicio
        </button>
        <button 
          className="btn btn-outline-primary"
          onClick={() => navigate('/noticias')}
        >
          <i className="bi bi-arrow-left me-2"></i>Volver a Noticias
        </button>
      </div>

      {/* Contenido de la noticia */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="news-container">
              {/* Primera fila: Título */}
              <div className="row">
                <div className="col-12">
                  <h1 className="news-title">{news.title}</h1>
                </div>
              </div>
              
              {/* Segunda fila: Descripción y fecha */}
              <div className="row">
                <div className="col-12">
                  <p className="lead">{news.description}</p>
                  <p className="news-date">Publicado el {news.date}</p>
                </div>
              </div>
              
              {/* Tercera fila: Imagen principal */}
              <div className="row">
                <div className="col-12">
                  <img src={news.image} alt={news.title} className="news-img" />
                </div>
              </div>
              
              {/* Cuarta fila: Información del autor */}
              <div className="row align-items-center mt-4">
                <div className="col-md-9">
                  <div className="d-flex align-items-center">
                    <img src={news.author.image} alt={news.author.name} className="author-img me-4" />
                    <div>
                      <h5 className="mb-1">{news.author.name}</h5>
                      <p className="mb-0 text-muted">{news.author.role}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-3 mt-md-0">
                  <div className="d-flex justify-content-md-end">
                    <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
              
              {/* Quinta fila: Historia completa */}
              <div className="row mt-5">
                <div className="col-12">
                  <div 
                    className="content-text"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />
                </div>
              </div>
              
              {/* Sexta fila: Redes sociales de Línea Vida 103 */}
              <div className="row">
                <div className="col-12">
                  <div className="lv-social text-center">
                    <h4>Sigue a Línea Vida 103 en sus redes sociales</h4>
                    <div className="d-flex justify-content-center mt-3">
                      <a href="#" className="btn btn-primary me-2"><i className="bi bi-facebook me-2"></i>Facebook</a>
                      <a href="#" className="btn btn-info me-2 text-white"><i className="bi bi-twitter me-2"></i>Twitter</a>
                      <a href="#" className="btn btn-danger"><i className="bi bi-instagram me-2"></i>Instagram</a>
                    </div>
                    <p className="mt-3 mb-0">#TuVidaImporta #LíneaVida103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;