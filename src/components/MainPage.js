import React from 'react';
import profile from '../assets/profile.jpeg';

const MainPage = ({ onNavigate, onNavigateMetodologias }) => {
  return (
    <header className="App-header">
      <img src={profile} className="App-logo-static" alt="profile" />
      <h1 className="title">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
      <h2 className="subtitle">Alumno(a): DAVID ISRAEL GARCIA PAEZ</h2>
      
      <div className="links-container">
        <a 
          href="https://www.linkedin.com/in/david-israel-garcia-paez-740b17247/" 
          target="_blank" 
          rel="noreferrer" 
          className="text-link"
        >
          LINKED IN DE MI PROFILE
        </a>

        <button onClick={onNavigate} className="text-link-btn">
          DOCUMENTACION PARCIAL 1
        </button>

        {/* Nuevo botón para el Parcial 2 */}
        <button onClick={onNavigateMetodologias} className="text-link-btn">
          DOCUMENTACION PARCIAL 2
        </button>
      </div>
    </header>
  );
};

export default MainPage;