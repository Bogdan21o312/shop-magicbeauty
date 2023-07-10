FROM node:18

WORKDIR /app

EXPOSE 4200

COPY package*.json ./
#RUN apk add --no-cache python3
#RUN npm install -g npm@9.8.0
#RUN npm cache clean --force
RUN npm i

COPY .. .

CMD ["npx", "nx", "run", "shop-magicbeauty:serve"]
