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

  // Handler for file input change
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Upload the file
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      // After upload, fetch the updated file list from /files and /uploads
      const filesRes = await fetch("http://localhost:8000/files");
      const filesData = await filesRes.json();

      const uploadsRes = await fetch("http://localhost:8000/uploads");
      const uploadsData = await uploadsRes.json();

      // Optionally, you can set state here to display files/uploads if needed
      // Example:
      // setFiles(filesData.files);
      // setUploads(uploadsData.uploads);
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      const data = await response.json();
      setStatusMessage(data.status || "Upload complete");
    } catch (err) {
      setStatusMessage("Upload failed");
      console.error("Error uploading file:", err);
    }
  };

  // Ref for hidden file input
  const fileInputRef = React.useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  // State to hold multiple selected files
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Helper to get file icon or preview
  const getFileIcon = (file) => {
    const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
    if (imageTypes.includes(file.type)) {
      // Show image preview
      const url = URL.createObjectURL(file);
      return <img src={url} alt={file.name} style={{ width: 32, height: 32, objectFit: "cover", borderRadius: 4 }} onLoad={() => URL.revokeObjectURL(url)} />;
    }
    // Show generic file icon for non-images
    return <File size={32} />;
  };

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
          <button
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
          >
            Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(event) => {
              handleUpload(event);
              const file = event.target.files[0];
              if (file) {
                setSelectedFiles((prev) => [...prev, file]);
              }
            }}
          />
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
          {selectedFiles.length > 0 &&
            selectedFiles.map((file, idx) => (
              <div className="onedrive-card" key={idx}>
                {getFileIcon(file)}
                <span>{file.name}</span>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;