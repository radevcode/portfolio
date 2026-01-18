FROM node:22-slim

WORKDIR /app

#Copied files and packages
COPY package*.json ./

RUN npm install
# Copied all the code..
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]