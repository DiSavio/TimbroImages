import React, { useEffect, useState } from "react";

function BackendStatus() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Fetch welcome message
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setWelcomeMessage(data.message))
      .catch((err) => console.error("Error fetching welcome:", err));

    // Fetch status message
    fetch("http://localhost:8000/status")
      .then((res) => res.json())
      .then((data) => setStatusMessage(data.status))
      .catch((err) => console.error("Error fetching status:", err));
  }, []);

  return (
    <div>
      <h1>Backend Messages</h1>
      <p><strong>Welcome:</strong> {welcomeMessage}</p>
      <p><strong>Status:</strong> {statusMessage}</p>
    </div>
  );
}

export default BackendStatus;
