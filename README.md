# 📸 Timbro Images

**Timbro Images** is a self-hosted image search and file management web application inspired by the core functionality of Google Images. Built for personal/family use, this app allows searching, uploading, and organizing image files, all running securely on your own server infrastructure.

---

## 🛠️ Tech Stack

| Layer         | Tech                             |
|--------------|-----------------------------------|
| Frontend     | React (Vite or CRA)               |
| Backend      | Python + FastAPI                  |
| Database     | PostgreSQL                        |
| Containerization | Docker + Docker Compose     |
| Version Control | Git + GitHub                   |
| Deployment Target | Home Server via Proxmox (Linux VM) |

---

## ✨ Features (Planned & Current)

- ✅ Image upload & storage
- ✅ Search functionality (by filename / metadata)
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

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/DiSavio/TimbroImages.git
cd TimbroImages

2. Start Docker Services

docker-compose up --build

This launches the frontend, backend, and PostgreSQL database together.

If you want to run it in the background:

docker-compose up -d

3. Access the App

    Frontend: http://localhost:3000 (or whatever port is defined)

    Backend API (FastAPI docs): http://localhost:8000/docs

🧪 Development Tips
Database CLI

If you're using pgcli:

pgcli -h localhost -p 5432 -U your_username -d your_database

You can also define these credentials in the .env file and have Docker pass them into your containers.
Common Docker Commands
Action	Command
Rebuild containers	docker-compose up --build
Stop containers	docker-compose down
View logs	docker-compose logs -f
View running containers	docker ps
🐙 GitHub Usage

git add .
git commit -m "Short message"
git push

To clone on a new machine:

git clone https://github.com/DiSavio/TimbroImages.git

📦 Deployment Plan (Proxmox Home Server)

    Set up Proxmox + Linux VM (Ubuntu Server recommended)

    Install Docker + Docker Compose on the VM

    Clone this repo onto the VM

    Run docker-compose up -d

    (Optional) Reverse proxy using NGINX + SSL (via Let's Encrypt)

    Expose access internally or over internet securely

🧑‍💻 Author

Alexei Timbro (DiSavio)
🔗 GitHub
📧 alexei.timbro@gmail.com
📄 License

This project is currently for personal and educational use. Licensing will be added if the project becomes public-facing.
✅ TODO Roadmap

Set up GitHub + project boilerplate

Dockerize backend, frontend, DB

Build image upload logic

Connect frontend to backend APIs

Implement PostgreSQL queries for metadata

Build image search interface

Secure file handling

    Add user authentication (optional)

    ⚠️ Disclaimer: Timbro Images is not affiliated with or a replacement for Google Images. It is a self-hosted, personal learning project.


---

Let me know if you want:
- Markdown badges (build status, license, etc.)
- Screenshots or GIFs added
- Live link section (for a deployed version)
- Contribution guide or `.env.example` template

I'll help you keep it polished!
