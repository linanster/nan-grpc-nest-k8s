# FROM node:18-alpine
FROM acr-on-enterprise-registry.cn-hangzhou.cr.aliyuncs.com/on-common/node:18.18.2

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY proto ./proto
COPY service-a ./service-a

RUN npm install
RUN npm run build:service-a

EXPOSE 3000

CMD ["npm", "run", "start:service-a"]