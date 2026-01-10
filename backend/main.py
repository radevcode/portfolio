from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os

app = FastAPI()

#Configure CORS so that React can comumnicate with the backend
app.add_middelware(
    CORSMiddleware,
    allow_origins=["*"], #For production write the real url
    allow_methods=["*"],
)
    
env_users = os.getenv("GITHUB_USERS", "racode75")
GITHUB_USERS = env_users.split(",")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

@app.get("/api/github/repos")
async def get_github_repos():
    url = f"https://api.github.com/users/{GITHUB_USERS}/repos?sort=updated"
    headers = {"Authorization": f"token {GITHUB_TOKEN}"} if GITHUB_TOKEN else {}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error con GitHub")
        
        #Filtering...
        repos = response.json()
        return [
            {
                "name": r["name"],
                "url": r["html_url"],
                "description": r["description"],
                "stars": r["stargazers_count"],
                "language": r["language"]
            }
            for r in repos if not r["fork"] # Only my projects
        ]