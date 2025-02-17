# Use Node.js LTS image for production
FROM node:23-alpine3.20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for installing dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy source files
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV MONGODB_URI=mongodb://mongodb:27017/mydatabase
ENV PORT=5000
ENV JWT_SECRET=mySuperSecretKey12345!

# Expose the port for the app
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
