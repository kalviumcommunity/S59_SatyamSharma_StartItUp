FROM node:14

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1300

CMD ["npm", "start"]
