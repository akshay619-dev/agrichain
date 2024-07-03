FROM node:20-alpine
WORKDIR /app

ENV VITE_APP_URL=http://localhost:5173
ENV VITE_API_URL=http://localhost:8000

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY dist .

# Expose port 5173 to allow communication to/from server
EXPOSE 5173

# Command to run when container starts
CMD ["npm", "run" , "dev"]
