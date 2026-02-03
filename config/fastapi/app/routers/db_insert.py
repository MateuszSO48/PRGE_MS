from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password

router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}",
    )


class PortData(BaseModel):
    name: str
    type: str


def get_coordinates(city: str):
    import requests
    from bs4 import BeautifulSoup
    url: str = f'https://pl.wikipedia.org/wiki/{city}'
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/123.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers=headers)

    response_html = BeautifulSoup(response.text, "html.parser")

    latitude = float(response_html.select('.latitude')[1].text.replace(',', '.'))
    longitude = float(response_html.select('.longitude')[1].text.replace(',', '.'))

    return [latitude, longitude]


@router_insert.post("/insert_port")
async def insert_port(user: PortData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        geom = get_coordinates(port.name)

        params = {
            "name": port.name,
            "type": port.type,
            "lat": geom[0],
            "lon": geom[1],
        }

        sql_query = text("""
                         insert into ports (name, type, geom)
                         values (:name, :type, ST_SetSRID(ST_MakePoint(:lon, :lat), 4326)::geography); \
                         """)

        with db_connection.connect() as connection:
            result = connection.execute(sql_query, params)
            connection.commit()
            print(f"Dodano port: {port.name}")

    except Exception as e:
        print(e)
        raise e

    return {"status": 1}