FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ["package.json", "./"]

RUN npm install --production
# RUN npm install --save-dev babel-watch
# RUN npm install --save-dev @babel/core @babel/cli

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]