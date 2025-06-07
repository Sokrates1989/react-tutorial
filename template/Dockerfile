# --- Stage 1: Build the Vite app ---
FROM node:24 AS builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./
COPY public/index.html ./index.html      
RUN npm install

COPY . .

RUN npm run build


# --- Stage 2: Serve with NGINX ---
FROM nginx:stable-alpine

# Copy built app from builder.
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace NGINX config if needed.
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy entrypoint script.
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Enter container using port 80 (default http port).
EXPOSE 80

# Use custom entrypoint instead of default CMD.
ENTRYPOINT ["/entrypoint.sh"]
