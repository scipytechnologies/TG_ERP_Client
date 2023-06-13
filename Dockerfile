# Stage 1: Build the React application
FROM node:18 as build
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the built application with NGINX
FROM nginx:1.21-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port on which the server will listen
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
