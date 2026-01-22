from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os

app = FastAPI()

#Configure CORS so that React can comumnicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #For production write the real url
    allow_methods=["*"],
)
    
env_users = os.getenv("GITHUB_USERS", "")
#Detect if the env file is not load...
if not env_users:
    print("Warning: the users did not load from the .env file")
    GITHUB_USERS=["racode75"]
else:
    GITHUB_USERS = [u.strip() for u in env_users.split(",") if u.strip()]#env_users.split(",")

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
#debug
@app.get("/test")
def test():
    return {"status": "ok", "usuarios": GITHUB_USERS}


@app.get("/api/github/repos")
async def get_github_repos():
    print(f"DEBUG: Usuarios cargados: {GITHUB_USERS}")
    all_repos = []
    headers = {"Authorization": f"token {GITHUB_TOKEN}"} if GITHUB_TOKEN else {}

    async with httpx.AsyncClient() as client:
        for user in GITHUB_USERS:
            user = user.strip() # clean whitespaces
            url = f"https://api.github.com/users/{user}/repos?sort=updated&per_page=100"
            response = await client.get(url, headers=headers)
            if response.status_code == 200:
                        #Filtering...
                repos_data = response.json()

                for r in repos_data:
                    #Filtrado por tag
                    topics = r.get("topics", [])
                    if not r["fork"] and "portfolio" in topics:
                        repo_name = r["name"]
                        #imagen
                        image_url = f"https://opengraph.githubassets.com/1/{user}/{repo_name}"

                        all_repos.append({
                            "name": r["name"],
                            "url": r["html_url"],
                            "description": r["description"],
                            "stars": r["stargazers_count"],
                            "language": r["language"],
                            "image": image_url,
                            "topics": topics
                        }) 
            else:
                print(f"Error consultando a {user}: {response.status_code}")
    return all_repos                             

