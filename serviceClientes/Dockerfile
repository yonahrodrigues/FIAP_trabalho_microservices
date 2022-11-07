from node:17-slim

RUN apt-get update 

WORKDIR /api/

COPY . .

COPY package.json package-lock.json /api/

RUN npm ci --silent

RUN npm install 

RUN npm install -g nodemon

RUN npm install -g ts-node

RUN npm install typescript

RUN npm install cors

RUN npm install dotenv

RUN npm install express
RUN npm install @types/express
RUN npm install @types/typescript
RUN npm install @types/cors

COPY . .

EXPOSE 3000

USER node
CMD npm run start-dev
