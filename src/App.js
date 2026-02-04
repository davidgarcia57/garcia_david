import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import DownloadCenter from './DownloadCenter';

function App() {
  const [view, setView] = useState('main');

  return (
    <div className="App">
      {view === 'main' ? (
        <MainPage onNavigate={() => setView('downloads')} />
      ) : (
        <DownloadCenter onBack={() => setView('main')} />
      )}
    </div>
  );
}

export default App;