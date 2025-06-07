```markdown
# Mitglieder Upload Template

A Dockerized Vite + React template with runtime environment variable injection.  
It ensures a consistent, modern development and deployment setup using `env.js` and `window._env_`.

---

## Table of Contents

1. [📖 Overview](#-overview)  
2. [🧑‍💻 Usage](#-usage)  
3. [🛠️ Configuration](#-configuration)  
4. [🐳 Docker Setup](#-docker-setup)  
   - [📦 Dockerfile Explained](#-dockerfile-explained)  
   - [📂 Docker Compose](#-docker-compose)  
5. [🧪 Development Tips](#-development-tips)  
   - [🌱 Environment Variables (Build-time vs Runtime)](#-environment-variables-build-time-vs-runtime)  
6. [📁 Project Structure](#-project-structure)  
7. [🚀 Summary](#-summary)

---

# 📖 Overview

This project is a modern Vite-based React frontend powered entirely by Docker.  
It supports runtime environment variable injection, rapid development with Vite, and clean deployment using NGINX.

It uses:
- `vite` for dev server and build tooling
- `nginx` to serve the built site
- `env.js` and `window._env_` for runtime-configurable values
- Port `80` for all environments (dev & prod)
- Docker for everything — no local Node.js required

---

# 🧑‍💻 Usage

### Start the app

```bash
docker compose up --build
```

> Use `--build` every time you change code or env variables.

### Open in browser

[http://localhost](http://localhost)

### Stop

```bash
docker compose down
```

---

# 🛠️ Configuration

To configure the app:

- Copy `.env.template` → `.env`
- Modify `VITE_BACKEND_URL` to your API or service
- Runtime injection is handled automatically via `env.js`

---

# 🐳 Docker Setup

## 📦 Dockerfile Explained

Multistage build with Vite and NGINX:

```dockerfile
# --- Stage 1: Build the Vite app ---
FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
COPY vite.config.js ./
COPY public/index.html ./index.html
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Serve with NGINX and runtime env injection ---
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
```

## 📂 Docker Compose

```yaml
services:
  app:
    build: .
    ports:
      - "80:80"
    environment:
      - VITE_BACKEND_URL=http://localhost:8080
    volumes:
      - .:/app
      - /app/node_modules
```

---

# 🧪 Development Tips

## 🌱 Environment Variables (Build-time vs Runtime)

### ✅ Build-time (`.env` / `import.meta.env`)

```env
VITE_BACKEND_URL=http://localhost:8080
```

Accessible via:

```js
import.meta.env.VITE_BACKEND_URL
```

> Rebuild is required to reflect changes.

---
---

### ✅ Runtime via `window._env_` (recommended)

The app supports runtime configuration via a dynamically generated `env.js` file. This is injected at container startup using `entrypoint.sh`.

- Loaded by `index.html`:  
  ```html
  <script src="/env.js"></script>
  ```
- Accessed in app code:  
  ```js
  const API_URL = window._env_?.VITE_FONTANHERZEN_BACKEND_API_URL;
  ```

### Files involved

| File | Purpose |
|------|---------|
| `public/env.template.js` | Local fallback for dev |
| `public/env.js` | 🔧 Generated at runtime (gitignored) |
| `entrypoint.sh` | Writes `env.js` from environment variables |

To add a new variable:
- Update `entrypoint.sh`
- Update `public/env.template.js` (dev fallback)
- Optionally add to `.env.template` as doc

---

# 📁 Project Structure

```
template/
├── docker-compose.yml
├── Dockerfile
├── entrypoint.sh
├── .env.template
├── .gitignore
├── public/
│   ├── index.html
│   ├── env.template.js
│   └── env.js (⛔ runtime-only, gitignored)
├── src/
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── package.json
├── vite.config.js
```

---

# 🚀 Summary

✅ Uses Vite for lightning-fast development  
✅ Serves with NGINX and runtime config  
✅ Dockerized — no local Node.js setup needed  
✅ Runtime `env.js` powers dynamic backend URLs  
✅ Flexible for dev, staging, and prod environments
```