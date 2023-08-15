FROM node:latest AS builder

WORKDIR /home/node/app

COPY package.json .
RUN npm install && npm audit fix

COPY . .
RUN npm run build && npm run server


FROM node:alpine

WORKDIR /home/node/app

COPY --from=builder /home/node/app .

CMD ["npm", "run", "dev"]