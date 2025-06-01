# 🚀 React App in Docker – No Node.js Installation Required

A professional template to build and run a React.js application fully inside Docker — no local Node.js installation needed. This setup simplifies onboarding, ensures a consistent environment, and supports fast local development.

## Table of Contents

1. [📖 Overview](#-overview)  
2. [🧑‍💻 Usage](#-usage)  
3. [🛠️ Configuration](#-configuration)  
4. [🐳 Docker Setup](#-docker-setup)  
   - [📦 Dockerfile Explained](#-dockerfile-explained)  
   - [📂 Docker Compose](#-docker-compose)  
5. [🧪 Development Tips](#-development-tips)  
   - [🌱 Environment Variables](#-environment-variables)  
   - [⚠️ Deprecation Notices](#-deprecation-notices)  
6. [📦 Production Build](#-production-build)  
   - [📄 Multistage Dockerfile (Nginx)](#-multistage-dockerfile-nginx)  
7. [📁 Project Structure](#-project-structure)  
8. [🚀 Summary](#-summary)

<br>
<br>

# 📖 Overview

This project bootstraps a minimal React.js app using Docker to handle all dependencies and development environment setup. It's ideal if you:

- Don’t want to install Node.js locally.
- Need a reproducible dev setup across machines or teams.
- Prefer clean separation between host and dev environments.

It uses:
- `node:24` base image
- `react-scripts` for development server
- `docker-compose` for easy volume and port setup

<br>
<br>

# 🧑‍💻 Usage

To start the development server:

```bash
docker-compose up --build
```

Then open [http://localhost:3000](http://localhost:3000)

To stop:

```bash
docker-compose down
```

<br>
<br>

# 🛠️ Configuration

No local setup is required other than Docker and Docker Compose.

To customize the behavior (e.g., port, browser, etc.), create a `.env.development` file:

```env
PORT=3000
BROWSER=none
FAST_REFRESH=true
```

<br>
<br>

# 🐳 Docker Setup

## 📦 Dockerfile Explained

```Dockerfile
FROM node:24

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 📂 Docker Compose

```yaml
services:
  react-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

<br>

# 🧪 Development Tips

## 🌱 Environment Variables

Using `.env.development` is a safe way to override defaults without touching Dockerfiles.

## ⚠️ Deprecation Notices

You may see these logs:

- `fs.F_OK is deprecated`
- `onAfterSetupMiddleware` deprecated

These come from `react-scripts` and **do not impact functionality**. You can ignore them safely.

For a modern stack, consider switching to [Vite](https://vitejs.dev/) in the future.

<br>

# 📦 Production Build

## 📄 Multistage Dockerfile (Nginx)

To create a production-ready image:

```Dockerfile
FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t react-prod .
docker run -p 80:80 react-prod
```

<br>

# 📁 Project Structure

```
react-docker-template/
├── docker-compose.yml
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── public/
│ └── index.html
└── src/
├── App.jsx
└── index.js
```

<br>

# 🚀 Summary

✅ **No local Node.js required** — Docker handles it all  
✅ **Modern structure** for scalable React apps  
✅ **Optional production build** with Nginx  
✅ **Clean developer experience** for teams and CI/CD pipelines  