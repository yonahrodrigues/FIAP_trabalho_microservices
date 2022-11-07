from node:17-slim

RUN apt-get update 

WORKDIR /api2/

COPY package.json package-lock.json /api2/

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

EXPOSE 4000

USER node
CMD npm run start-dev
