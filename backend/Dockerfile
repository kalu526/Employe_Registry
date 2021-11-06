FROM node:alpine
ENV NODE_ENV=production
WORKDIR /src/app
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /src/app
USER node
CMD ["npm","start"]

