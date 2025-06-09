# Basis-Image
FROM node:18

# Arbeitsverzeichnis setzen
WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Docusaurus-Projekt builden
RUN npm run build

# Webserver installieren (serve)
RUN npm install -g serve

# Port freigeben
EXPOSE 4000

# Startbefehl
CMD ["serve", "-s", "build", "-l", "4000"]
