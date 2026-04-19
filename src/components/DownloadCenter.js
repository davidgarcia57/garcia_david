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
        {/* Cambiamos btn-blue por btn-primary (Azul oficial de Bootstrap) */}
        <button className="btn btn-primary" onClick={() => handleDownload('comandos.pdf')}>
          COMANDOS BÁSICOS DE REACT
        </button>
        
        {/* Cambiamos btn-green por btn-success (Verde oficial de Bootstrap) */}
        <button className="btn btn-success" onClick={() => handleDownload('ieee.pdf')}>
          ISO / ESTANDAR IEEE
        </button>
        
        {/* Estos ya usaban btn-dark, así que funcionan perfecto */}
        <button className="btn btn-dark" onClick={() => handleDownload('requerimientos.pdf')}>
          REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
        </button>
        
        <button className="btn btn-dark" onClick={() => handleDownload('sha_256.pdf')}>
          CÓDIGO PYTHON ALGORITMO SHA-256
        </button>

        {/* Cambiamos a btn-secondary y le damos un margen superior (mt-3) */}
        <button onClick={onBack} className="btn btn-secondary mt-3">
          REGRESAR AL PROYECTO PRINCIPAL
        </button>
      </div>
    </div>
  );
};

export default DownloadCenter;