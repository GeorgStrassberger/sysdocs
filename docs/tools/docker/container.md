# Container

Ein **Container** ist eine laufende Instanz eines Docker Images.  

---



## Container erstellen & starten (docker run)

Der wichtigste Befehl:
```bash
docker run [OPTIONS] IMAGE [COMMAND]
```

Beispiel: Nginx Container starten
```
docker run -d \
  --name nginx-app \
  -p 80:80 \
  nginx:latest
```

Erklärung:
- `-d` Detached Mode (im Hintergrund)
- `--name` Container Name
- `--restart` neustart verhalten
- `-p` Port zuweisung (Host:Container)
- `-v` pfad/zum/volume

---

### Wichtige Run Optionen (Cheatsheet)

Name vergeben
```bash
docker run --name my-container nginx
```

Port Mapping
```bash
docker run -p 3000:3000 myapp
```

Format:
```bash
HOST_PORT:CONTAINER_PORT
```

Environment Variablen
```bash
docker run -e NODE_ENV=production myapp
```

Volumes mounten
```bash
docker run -v ./data:/app/data myapp
```

Container im Hintergrund starten
```bash
docker run -d myapp
```

---

### Container Lifecycle (sehr wichtig)
Laufende Container anzeigen
```bash
docker ps
```

Alle Container anzeigen (inkl. gestoppte)
```bash
docker ps -a
```

Container stoppen
```bash
docker stop nginx-app
```

Container starten (nach Stop)
```bash
docker start nginx-app
```

Container neu starten
```bash
docker restart nginx-app
```

Container löschen
```bash
docker rm nginx-app
```

Container + Volume löschen:
```bash
docker rm -v nginx-app
```

---

### Logs & Debugging

Logs anzeigen
```bash
docker logs nginx-app
```

Live Logs (Follow Mode)
```bash
docker logs -f nginx-app
```

In einen laufenden Container gehen (Shell)
```bash
docker exec -it nginx-app bash
```

Oder bei Alpine Images:
```bash
docker exec -it nginx-app sh
```

---

## Restart Policies (Production wichtig)
```bash
docker run -d \
  --restart=always \
  --name app \
  myapp
```

Optionen:
- `no` = Kein automatischer Restart (Default)
- `always` = Immer neu starten
- `unless-stopped` = Neustart außer manuell gestoppt
- `on-failure` = Nur bei Fehler

---

## Container Ressourcen limitieren (Advanced)

CPU Limit
```bash
docker run --cpus="1.0" myapp
```

RAM Limit
```bash
docker run -m 512m myapp
```

Sehr wichtig für:
- Server
- Kubernetes Vorbereitung
- Multi-Service Setups

---
