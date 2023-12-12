FROM node:latest AS builder

WORKDIR /home/node/app

COPY package.json .
RUN npm install && npm audit fix

COPY . .

FROM node:alpine

WORKDIR /home/node/app

COPY --from=builder /home/node/app .

EXPOSE 3000

CMD ["npm", "run", "dev"]
