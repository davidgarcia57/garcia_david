import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import DownloadCenter from "./components/DownloadCenter";
import MetodologiasSW from "./components/MetodologiasSW";

function App() {
  const [view, setView] = useState("main");

  return (
    <div className={view === "metodologias" ? "App" : "App dark-layout"}>
      {view === "login" && <Login />}

      {view === "main" && (
        <MainPage
          onNavigate={() => setView("downloads")}
          onNavigateMetodologias={() => setView("metodologias")}
        />
      )}

      {view === "downloads" && (
        <DownloadCenter onBack={() => setView("main")} />
      )}

      {view === "metodologias" && (
        <MetodologiasSW onBack={() => setView("main")} />
      )}
    </div>
  );
}

export default App;
