FROM node:alpine
ENV NODE_ENV=production
WORKDIR /src/app
COPY ["package.json","yarn.lock", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "run", "start"]