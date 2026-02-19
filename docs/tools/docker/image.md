# Images

Ein **Image** ist eine schreibgeschützte Vorlage, aus der Container gestartet werden.
Ein Image besteht aus mehreren **Layern** (z. B. Base-OS, Runtime, App-Code).

---

## Registries (wo Images herkommen)

Häufige Container Registries:

- **Docker Hub** (Standard): `docker.io`  
- **GitHub Container Registry (GHCR)**: `ghcr.io`
- **GitLab Container Registry**: (meist) `registry.gitlab.com`

> Hinweis: „Registry“ ist der Server, „Repository“ ist der Image-Pfad innerhalb der Registry.

---

## Image Namen Schema

Format:
`[registry/][namespace/]repository[:tag]`

Beispiele:
- `nginx:latest` (Docker Hub, offizielles Image)
- `node:20-alpine` (Docker Hub, Tag = `20-alpine`)
- `ghcr.io/meinuser/meinimage:1.0.0`
- `registry.gitlab.com/meinuser/meinprojekt/app:2026-02-19`

Wenn kein Tag angegeben ist → default ist `:latest`.

---

## Image herunterladen


Läde das fertig image aus der gewünschen container registry.
```bash
docker pull nginx:latest
```

Pull aus einer anderen Registry
```bash
docker pull ghcr.io/OWNER/IMAGE:TAG
docker pull registry.gitlab.com/GROUP/PROJECT/IMAGE:TAG
```

---

## Images lokal verwalten

Lokale Images anzeigen
```bash
docker images
```

Details zu einem Image
```bash
docker image inspect nginx:latest
```

Image löschen
```bash
docker rmi nginx:latest
```

Cleanup: ungenutzte Images entfernen (Vorsicht)
```bash
docker image prune
```

---

## Best Practices für Tags

Empfehlung: In Prod möglichst versionierte Tags nutzen.

Besser:
- `node:20-alpine`
- `nginx:1.27`
- `myapp:1.2.3`

Riskanter:
- `:latest` (kann sich jederzeit ändern)
