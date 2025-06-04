# Use official Node.js image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Serve with a lightweight web server (e.g., serve)
RUN npm install -g serve

# Expose port (adjust if needed)
EXPOSE 4173

# Start the app
CMD ["serve", "-s", "dist"]

