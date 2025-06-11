import React, { useEffect, useState } from "react";
import { Folder, File } from "lucide-react";
import "./App.css";

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
    <div className="onedrive-wrapper">
      <header className="onedrive-header">
        <div className="logo">TimbroImages</div>
        <div className="user-section">User</div>
      </header>

      <div className="onedrive-sidebar">
        <ul>
          <li>My Files</li>
          <li>Recent</li>
          <li>Shared</li>
          <li>Recycle Bin</li>
        </ul>
      </div>

      <main className="onedrive-main">
        <div className="onedrive-toolbar">
          <button>Upload</button>
          <button>New Folder</button>
        </div>

        <div className="onedrive-grid">
          <div className="onedrive-card">
            <Folder size={32} />
            <span>{welcomeMessage}</span>
          </div>
          <div className="onedrive-card">
            <File size={32} />
            <span>{statusMessage}</span>
          </div>
        </div>
      </main>
    </div>
    
  );
}

export default App;