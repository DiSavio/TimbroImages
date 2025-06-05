import React, { useEffect, useState } from "react";
import "./App.css"; // Make sure you create this CSS file

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setWelcomeMessage(data.message))
      .catch((err) => console.error("Error fetching welcome:", err));

    fetch("http://localhost:8000/status")
      .then((res) => res.json())
      .then((data) => setStatusMessage(data.status))
      .catch((err) => console.error("Error fetching status:", err));
  }, []);

  return (
    <div className="app-container">
      <header className="top-bar">
        <h1>TimbroImages</h1>
        <div className="user-info"> User</div>
      </header>

      <main className="main-content">
        <div className="card">
          <h2>Welcome Message</h2>
          <p>{welcomeMessage}</p>
        </div>
        <div className="card">
          <h2>Status</h2>
          <p>{statusMessage}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
