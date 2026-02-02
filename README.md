# PRGE_MS
Projektowanie geoportali


## how to start
````bash
docker-compose -f ./docker-compose/docker-compose-prge-local.yml --env-file .env -p local-prge up --build -d
docker-compose -f ./docker-compose/docker-compose-prge-remote.yml -p remote-prge up --build -d


docker-compose -f ./docker-compose/docker-compose-prge-remote.yml --env-file .env -p remote-prge up --build -d
````
#
docker system prune -a -f

docker system prune --volumes