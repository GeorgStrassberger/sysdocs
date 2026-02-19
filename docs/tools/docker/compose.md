# Compose

**Docker Compose** ermöglicht es, mehrere Container als eine Anwendung zu definieren und zu starten – über eine einzige `docker-compose.yml`.

---

## Compose Datei (Grundstruktur)

Compsoe datei erstellen.
```bash
nano docker-compose.yml
```

Beispiel:
```yml
services:
  nginx:
    image: nginx:latest
    container_name: nginx-app
    ports:
      - "80:80"
```

Container im Hintergrund starten 
```bash
docker compose up -d
```

Das erstellt automatisch:
- Container
- Netzwerk
- Volumes (falls definiert)

---

## Compose Services (der Kern von Compose)
Jeder Eintrag unter services: ist ein Container.
```yaml
services:
  frontend:
    image: nginx:latest

  backend:
    image: node:20
```

Compose erstellt automatisch:
- Ein gemeinsames Netzwerk
- DNS (Service-Namen = Hostnames!)

Backend erreichbar über:
```url
http://backend:PORT
```

---

## Compose + Volumes (Persistente Daten)
```yaml
services:
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    volumes:
      - ./page:/usr/share/nginx/html:ro
```

Named Volume Beispiel:
```yaml
services:
  db:
    image: postgres:16
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

Best Practice:
- Bind Mount → Development
- Named Volume → Production (DB, stateful services)

---

## Compose + Build (eigene Images)

Wenn du ein eigenes Dockerfile hast:
```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: myapp
    ports:
      - "3000:3000"
```

Neu bauen:
```bash
docker compose up --build
```

Sehr wichtig für:
- Lokale Entwicklung
- CI/CD
- Custom Apps

---

## Compose + Netzwerke
Compose erstellt automatisch ein Netzwerk

Custom Netzwerk:
```yaml
services:
  app:
    image: myapp
    networks:
      - app-net

  db:
    image: postgres:16
    networks:
      - app-net

networks:
  app-net:
```

Vorteil:
- Saubere Service-Kommunikation
- Isolierte Stacks

---
