// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CarouselGovco from './components/CarouselGovco';
import EmergencyAssistance from './components/EmergencyAssistance';
import VideoSection from './components/AutoPlayVideo';
import CADSection from './components/CADSection';
import PowerBIDashboard from './components/PowerBIDashboard';
import NewsCarousel from './components/NewsCarousel';
import News from './components/News';
import NewsDetail from './components/NewsDetail'; // Importar el nuevo componente
import './assets/css/CarouselGovco.css';
import './assets/css/styles.css';
import './assets/css/EmergencyAssistance.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselGovco />
              <EmergencyAssistance />
              <VideoSection />
              <CADSection />
              <PowerBIDashboard />
              <NewsCarousel />
            </>
          } />
          <Route path="/noticias" element={<News />} />
          <Route path="/noticia/:id" element={<NewsDetail />} /> {/* Nueva ruta */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;