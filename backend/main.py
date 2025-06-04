from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:5173"] for stricter policy
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
