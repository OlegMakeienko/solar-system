FROM ubuntu:latest
LABEL authors="olegmakeienko"

ENTRYPOINT ["top", "-b"]

FROM node:16

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
