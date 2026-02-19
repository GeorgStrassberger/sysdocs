# Network

---

## Docker Networking

Docker Networking ermöglicht die Kommunikation zwischen:
- Container ↔ Container
- Host ↔ Container
- Container ↔ Internet

Jeder Container läuft standardmäßig in einem isolierten Netzwerk mit eigener IP.

---

## Standard Netzwerk Verhalten (Out of the Box)

Wenn du einen Container startest:
```bash
docker run -d --name nginx nginx
```

Docker erstellt automatisch:
- Ein Netzwerk (meist: bridge)
- Eine interne IP für den Container
- Internetzugriff (Outbound)

Container können standardmäßig:
- 🌐 Ins Internet
- ❌ NICHT direkt vom Host erreichbar (ohne Port Mapping)

---

### Port Mapping (Host → Container)

Damit dein Container vom Host erreichbar ist:
```bash
docker run -p 3000:3000 myapp
```

Format:
```bash
<HOST_PORT>:<CONTAINER_PORT>
```

Beispiel:
- Host: `localhost:3000`
- Container: `app:3000`

Ohne `-p` ist der Container von außen nicht erreichbar.

---

## Docker Netzwerk Typen

### 1. Bridge (Default)

Standard Netzwerk für Container auf einem Host.
```bash
docker network ls
```

Beispiel:
```bash
docker run -d --name app1 nginx
docker run -d --name app2 nginx
```

Im Default-Bridge-Netzwerk:
- Container können sich per IP erreichen
- NICHT automatisch per Namen (ohne Custom Network)

---

### 2. Custom Bridge Network (Best Practice)

Eigenes Netzwerk erstellen:
```bash
docker network create my-network
```

Container im selben Netzwerk starten:
```bash
docker run -d --name app --network my-network nginx
docker run -d --name db --network my-network postgres
```

Jetzt funktioniert DNS intern: `http://db:5432`

Vorteile:
- Container erreichen sich per Name
- Bessere Isolation
- Standard in echten Projekten

---

### 3. Host Network (Linux)

Container nutzt direkt das Host-Netzwerk.
```bash
docker run --network host nginx
```

Eigenschaften:
- Kein Port Mapping nötig
- Höhere Performance
- Weniger Isolation

⚠️ Nur auf Linux verfügbar (nicht Docker Desktop wie Windows/macOS)

---

### 4. None Network (komplette Isolation)

```bash
docker run --network none nginx
```

Eigenschaften:
- Kein Internet
- Keine externe Kommunikation
- Maximale Isolation (Security / Spezialfälle)

---

### Container Kommunikation (Container ↔ Container)

Mit Custom Network (empfohlen)
```bash
docker network create app-net

docker run -d --name backend --network app-net my-backend
docker run -d --name frontend --network app-net my-frontend
```

Frontend kann Backend erreichen über: `http://backend:PORT`

Wichtig:
- Service Name = Hostname
- Kein Port Mapping intern nötig

---

### Netzwerke anzeigen & verwalten

Netzwerke auflisten
```bash
docker network ls
```

Netzwerk inspizieren (sehr hilfreich)
```bash
docker network inspect my-network
```

Zeigt:
- Verbundene Container
- IP Adressen
- Subnet
- Gateway

Netzwerk löschen
```bash
docker network rm my-network
```

---

### Container mit Netzwerk verbinden (nachträglich)

Container zu Netzwerk hinzufügen:
```bash
docker network connect my-network my-container
```

Container vom Netzwerk Trennen:
```bash
docker network disconnect my-network my-container
```

Sehr praktisch für Debugging.

---
