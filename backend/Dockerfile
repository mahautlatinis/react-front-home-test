FROM node:18-alpine3.15
WORKDIR /app
COPY package.json .
RUN npm install -g npm@8.16.0
WORKDIR /backendapp
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3030
ENTRYPOINT npm run start:dev
