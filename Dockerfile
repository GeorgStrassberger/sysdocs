# --- Schritt 1: Build Docusaurus ---
FROM node:24-alpine AS builder

# Arbeitsverzeichnis setzen
WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm ci

# Restliche Dateien kopieren
COPY . .

# Docusaurus-Projekt builden
RUN npm run build

# --- Schritt 2: Serve with nginx ---
FROM nginx:alpine

# Webserver konfiguration kopieren
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fertige Datein von Schritt 1, dem Webserver übergeben
COPY --from=builder /app/build /usr/share/nginx/html

# Port definieren
EXPOSE 80

# Startbefehl
CMD ["nginx", "-g", "daemon off;"]
