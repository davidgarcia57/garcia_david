import React from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import profile from '../assets/profile.jpeg';

const MainPage = ({ onNavigate, onNavigateMetodologias, user, onLoginSuccess, onLogout }) => {
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    onLoginSuccess({ name: decoded.name, email: decoded.email, picture: decoded.picture });
  };

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

        <button onClick={onNavigateMetodologias} className="text-link-btn">
          DOCUMENTACION PARCIAL 2
        </button>

        {user ? (
          <div className="google-user-info">
            <img src={user.picture} alt="avatar" className="google-avatar" />
            <span>{user.name}</span>
            <button onClick={() => { googleLogout(); onLogout(); }} className="text-link-btn">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.error('Login failed')}
            useOneTap
          />
        )}
      </div>
    </header>
  );
};

export default MainPage;