FROM node:18-alpine3.15
WORKDIR /app

COPY package.json .

RUN npm install -g npm@8.16.0

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps

#RUN npm install --save-dev env-cmd
#RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
#RUN apk add xsel
#RUN npm install -g serve

#RUN npm install --legacy-peer-deps @apideck/better-ajv-errors@0.3.6 @emotion/react@11.10.0 @emotion/styled@11.10.0 \
#	@material-ui/core@4.12.4 @mui/icons-material@5.8.4 @mui/material@5.9.3 @mui/styled-engine-sc@5.9.3 \
#	@types/node@16.11.47 @types/react@17.0.2 @types/react-dom@17.0.2 ajv@6.12.6 react@17.0.2 \
#	react-scripts@5.0.1 styled-components@5.3.5 web-vitals@2.1.4 bash vim

COPY . .
EXPOSE 3000
#CMD ["npm", "start"]
CMD npm start
