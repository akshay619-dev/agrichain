FROM node:20-alpine
WORKDIR /app

ENV VITE_APP_URL=http://localhost:5173
ENV VITE_API_URL=http://localhost:8000

COPY ./frontend/package*.json ./



RUN npm install

COPY ./frontend ./

# Expose port 3000 to allow communication to/from server
EXPOSE 3000

# Command to run when container starts
CMD ["npm", "start"]
