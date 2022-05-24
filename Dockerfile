FROM node:17

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
