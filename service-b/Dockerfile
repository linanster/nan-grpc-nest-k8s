FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY proto ./proto
COPY service-b ./service-b

RUN npm install

EXPOSE 50051

CMD ["npm", "run", "start:service-b"]