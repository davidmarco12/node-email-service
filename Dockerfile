FROM node:alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm ci 
# RUN npm install -g nodemon

COPY . .

EXPOSE 3000

#CMD ["npm", "start"]
CMD ["npm", "run", "dev"]