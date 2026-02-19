# Copy

Diese Seite behandelt primär: **docker cp** (Copy zwischen Host ↔ Container).

---

## Überblick
Docker Container sind isoliert vom Host-System.  
Um Dateien zu übertragen, gibt es drei Hauptmethoden:
- `docker cp` (einmaliges Kopieren)

---

## Dateien in den Container kopieren (Host → Container)

Syntax:
```bash
docker cp <HOST_PATH> <CONTAINER_NAME>:<CONTAINER_PATH>
```

Beispiel: Datei in Container kopieren
```bash
docker cp index.html nginx-app:/usr/share/nginx/html/index.html
```

---

## Dateien aus dem Container kopieren (Container → Host)

Syntax:
```bash
docker cp <CONTAINER_NAME>:<CONTAINER_PATH> <HOST_PATH>
```
Beispiel: Logs aus Container exportieren
```bash
docker cp nginx-app:/var/log/nginx ./logs
```

Jetzt liegen die Container-Logs lokal im Ordner `./logs`.

---