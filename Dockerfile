FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install

ENV HOST 0.0.0.0

CMD ["npm", "run", "start"]
