FROM node:16.16.0-alpine3.16

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "start"]