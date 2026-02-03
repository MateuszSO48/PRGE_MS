from fastapi import APIRouter
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password

router_get_ports = APIRouter()

def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

@router_get_ports.get("/get_ports")
async def get_ports():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sqL_query = text(""" select id, name, type, ST_X(geom::geometry) as lng, ST_Y(geom::geometry) as lat from ports""")

        with db_connection.connect() as conn:
            result = conn.execute(sqL_query)
            ports = []
            for row in result:
                ports.append({
                    "id": row.id,
                    "name": row.name,
                    "type": row.type,
                    "lat": row.lat,
                    "lng": row.lng,
                })

        return {"status": "success", "data": ports}
    except Exception as e:
        print(f"Błąd podczas get_ports")
        return {"error": str(e)}
