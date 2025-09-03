import React from 'react';
import '../assets/css/PowerBIDashboard.css';

const PowerBIDashboard = () => {
  return (
    <div className="powerbi-container">
      <div className="title-section">
        <h2><span>Conoce nuestros últimos logros en tiempo real</span></h2>
      </div>
      
      <div className="dashboard-wrapper">
        <iframe 
          title="DashboardLV103_Web" 
          className="powerbi-iframe"
          src="https://app.powerbi.com/view?r=eyJrIjoiMTY4NDNhNzktNmE3Ny00YjViLTk1ZmMtZDdiZGNmYmJkYWVjIiwidCI6IjU4ZWM1ZTYxLTBlZDctNDAyMS1hNGY4LWMyZTJiM2I5ZjVmZiIsImMiOjR9&pageName=45aeb5f06ed358b95968" 
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default PowerBIDashboard;