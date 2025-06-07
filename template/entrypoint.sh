#!/bin/sh

################################################################################
# Entrypoint script for Docker container serving a Vite frontend via NGINX.
#
# Purpose:
# This script dynamically generates the `env.js` file at container startup,
# making environment variables available to the frontend application at runtime.
# The file is written into the NGINX web root so it is loaded by `index.html`
# before the React app initializes.
#
# Variables injected into window._env_:
# - VITE_BACKEND_URL
#
# These should be passed as environment variables when starting the container,
# e.g. via Azure Container Apps, Docker CLI, or Kubernetes.
#
# After generating `env.js`, the script starts the NGINX web server.
################################################################################

# Write env.js file based on current environment variables
cat <<EOF > /usr/share/nginx/html/env.js
window._env_ = {
  VITE_BACKEND_URL: "${VITE_BACKEND_URL}"
};
EOF

# Then start NGINX
exec nginx -g "daemon off;"