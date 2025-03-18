FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY proto ./proto
COPY service-a ./service-a

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:service-a"]