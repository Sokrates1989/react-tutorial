
# ⚡ React + Vite App in Docker — No Local Node.js Needed

A modern Vite + React template fully Dockerized — no local Node.js required. Includes production build via NGINX, live environment variable support, and clean developer onboarding.

---

## 📚 Table of Contents

1. [📖 Overview](#-overview)  
2. [🚀 Quick Start](#-quick-start)  
3. [⚙️ Environment Variables](#️-environment-variables)  
4. [🐳 Docker Setup](#-docker-setup)  
   - [📦 Dockerfile](#-dockerfile)  
   - [📂 Docker Compose](#-docker-compose)  
5. [🏗️ Production](#-production)  
6. [🧪 Development Tips](#-development-tips)  
7. [📁 Project Structure](#-project-structure)  
8. [✅ Summary](#-summary)

---

## 📖 Overview

This project runs a **Vite-powered React app** inside Docker. No Node.js or dependencies need to be installed locally. Includes:

- ⚡ Lightning-fast builds via [Vite](https://vitejs.dev)
- 🐳 Dockerized NGINX server for production
- 🛠️ Live `.env` support via Vite conventions
- 🎨 Custom favicon handling

---

## 🚀 Quick Start

To build and start the app:

```bash
docker-compose up --build
```

Then open [http://localhost](http://localhost)

To stop:

```bash
docker-compose down
```

---

## ⚙️ Environment Variables

Use a `.env` file to define frontend-accessible values:

```env
VITE_BACKEND_URL=https://api.example.com
```

In React code, access them via:

```js
const backendUrl = import.meta.env.VITE_BACKEND_URL;
```

---

## 🐳 Docker Setup

### 📦 Dockerfile

```Dockerfile
FROM node:24 AS builder

WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### 📂 docker-compose.yml

```yaml
services:
  react-app:
    build: .
    ports:
      - "80:80"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - VITE_BACKEND_URL=${VITE_BACKEND_URL}
      - CHOKIDAR_USEPOLLING=true
```

---

## 🏗️ Production

This setup serves production builds using NGINX. Just run:

```bash
docker-compose up --build
```

This runs:
- `vite build`
- NGINX serving from `dist/` on port 80

---

## 🧪 Development Tips

- All Vite env vars **must be prefixed with `VITE_`**
- To prevent favicon caching issues, use a custom name like `favicon-vite.ico` and reference it in `index.html`:
  ```html
  <link rel="icon" href="/favicon-vite.ico" />
  ```
- To test in a clean browser context:
  ```bash
  open -na "Google Chrome" --args --user-data-dir="/tmp/chrome-test"
  ```

---

## 📁 Project Structure

```
react-docker-template/
├── docker-compose.yml
├── Dockerfile
├── .env
├── public/
│   ├── index.html
│   └── favicon-vite.ico
├── src/
│   ├── App.jsx
│   ├── index.jsx
│   └── components/
├── vite.config.js
└── package.json
```

---

## ✅ Summary

✅ **Modern Vite-powered build system**  
✅ **NGINX for fast static production serving**  
✅ **No local Node.js or global installs required**  
✅ **Ideal for teams, CI/CD, or cloud containers**
