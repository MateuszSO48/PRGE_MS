from fastapi import APIRouter

router = APIRouter()


@app.get("/endpoint")
async def endpoint():
    return {"Hello": "World"}