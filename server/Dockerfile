FROM node:12

WORKDIR /app/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

ENV NODE_ENV=development

RUN npm i -g nodemon

CMD ["npm", "run", "dev"]