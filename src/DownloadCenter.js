import React from 'react';

const DownloadCenter = ({ onBack }) => {
  const handleDownload = (fileName) => {
    // Apunta a la carpeta public/docs/
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/docs/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="download-card">
      <h1 className="download-title">Centro de Descargas</h1>
      <p className="download-desc">Haz clic en los botones para obtener tus archivos PDF.</p>
      
      <div className="button-group">
        <button className="btn btn-blue" onClick={() => handleDownload('comandos.pdf')}>
          COMANDOS BÁSICOS DE REACT
        </button>
        
        <button className="btn btn-green" onClick={() => handleDownload('ieee.pdf')}>
          ISO / ESTANDAR IEEE
        </button>
        
        <button className="btn btn-dark" onClick={() => handleDownload('requerimientos.pdf')}>
          REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
        </button>
        
        <button className="btn btn-dark" onClick={() => handleDownload('sha256.pdf')}>
          CÓDIGO PYTHON ALGORITMO SHA-256
        </button>

        <button onClick={onBack} className="btn btn-dark-exit">
          REGRESAR AL PROYECTO PRINCIPAL
        </button>
      </div>
    </div>
  );
};

export default DownloadCenter;