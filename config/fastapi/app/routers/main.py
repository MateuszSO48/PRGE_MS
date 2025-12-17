from fastapi import FastAPI
from app.routers import static_content

app = FastAPI(title="FastAPI")

app.include_router(static_content, endpoint, prefix="/api")