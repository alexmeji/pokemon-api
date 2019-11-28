FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install --production

## Copy the app
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]
