# syntax=docker/dockerfile:1

FROM node:20.11.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to use cached layers
COPY package*.json ./

# Install all dependencies, including 'devDependencies' for development
RUN npm install

RUN chown -R node:node /usr/src/app

# Copy the rest of the source files into the image
COPY . .

# Set the environment to 'development'
ENV NODE_ENV development

# Switch to user 'node' for security purposes
USER node

# The application's port number
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
