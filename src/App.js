import React, { useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainPage from "./components/MainPage";
import DownloadCenter from "./components/DownloadCenter";
import MetodologiasSW from "./components/MetodologiasSW";

const GOOGLE_CLIENT_ID = "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";

function App() {
  const [view, setView] = useState("main");
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className={view === "metodologias" ? "App" : "App dark-layout"}>
        {view === "main" && (
          <MainPage
            onNavigate={() => setView("downloads")}
            onNavigateMetodologias={() => setView("metodologias")}
            user={user}
            onLoginSuccess={(userData) => setUser(userData)}
            onLogout={() => setUser(null)}
          />
        )}

        {view === "downloads" && (
          <DownloadCenter onBack={() => setView("main")} />
        )}

        {view === "metodologias" && (
          <MetodologiasSW onBack={() => setView("main")} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
