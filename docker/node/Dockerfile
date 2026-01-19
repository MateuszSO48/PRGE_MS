FROM node:20

Label maintainer="mateusz s"

WORKDIR app

COPY config/node/frontend/my-app/package.json .
RUN npm install

COPY config/node/frontend/my-app .

ENV CI=false

CMD ["npm", "start"]


