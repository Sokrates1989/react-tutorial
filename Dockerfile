# Use official Node.js LTS image
FROM node:24

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port and start dev server
EXPOSE 3000
CMD ["npm", "start"]
