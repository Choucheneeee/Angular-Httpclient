# Use an official Node.js image to build the app
FROM node:18 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the container
COPY . .

# Build the Angular project
RUN npm run build --prod

# Use an Nginx image to serve the built files
FROM nginx:alpine

# Copy the built files to Nginx's default folder
COPY --from=build /app/dist/http-client/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx server  
CMD ["nginx", "-g", "daemon off;"]
