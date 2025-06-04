# 📸 Timbro Images

**Timbro Images** is a self-hosted image search and file management web application inspired by the core functionality of Google Images. Built for personal/family use, this app allows searching, uploading, and organizing image files, all running securely on your own server infrastructure.

---

## 🛠️ Tech Stack

| Layer         | Tech                             |
|--------------|-----------------------------------|
| Frontend     | React (Vite)               |
| Backend      | Python + FastAPI                  |
| Database     | PostgreSQL                        |
| Containerization | Docker + Docker Compose     |
| Version Control | Git + GitHub                   |
| Deployment Target | Home Server via Proxmox (Linux VM) |

---

## ✨ Features (Planned & Current)

- ⏳ Image upload & storage
- ⏳ Search functionality (by filename / metadata)
- ⏳ Basic file management (rename, delete)
- ⏳ Responsive frontend with React
- ⏳ PostgreSQL-backed metadata storage
- ⏳ Docker-based deployment
- ⏳ Authentication layer (optional, future)

---

## 📁 Project Structure

TimbroImages/
├── backend/
│ ├── main.py # FastAPI app
│ ├── Dockerfile # Backend Docker config
│ └── requirements.txt # Python dependencies
├── frontend/
│ ├── src/ # React source code
│ └── Dockerfile # Frontend Docker config
├── docker-compose.yml # Orchestrates backend + frontend + DB
├── .env # Environment variables
├── .gitignore
└── README.md # Project documentation


---

📦 Deployment Plan (Proxmox Home Server)

🧑‍💻 Author

Alexei Timbro (DiSavio)
🔗 GitHub
📧 alexei.timbro@gmail.com

This project is currently for personal and educational use. 

---
