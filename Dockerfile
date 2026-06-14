# Start from a small official image that already has Node.js installed
FROM node:lts-alpine

# Work inside a folder called /app inside the container
WORKDIR /app

# Copy just the dependency list first
COPY package*.json ./

# Install the app's dependencies (Express)
RUN npm install

# Now copy the rest of your code in
COPY . .

# Note that the app uses port 3000
EXPOSE 3000

# The command that starts your app when the container runs
CMD ["node", "server.js"]
