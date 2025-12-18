# Zertifikate TLS/SSL

---


## Zertifikat Erstellen

1. Domainnamen ausdenken: `meineapp.home`
2. DNS/Hosts Eintragen
3. Zertifikat erstellen
4. TLS-Secret in Kubernetes erstellen und Ingress zuweisen
5. 

Erstellen (wie/wo/was)
- crt 
- cert
- key
- pem

Es kommen 2 datein raus cert/key
```bash

```


---

### zu punkt 3

Möglichkeiten:
 - Self-signed CA + Zertifikat (klassisch via openssl)
 - oder bequem mit mkcert, das dir eine lokale CA erstellt und sie gleich ins Trust-Store packt.

Name auflösen können:
    Jeder Rechner in deinem LAN muss nextcloud.home.lan auf die richtige IP auflösen (DNS/Hosts).

Zertifikat vertrauen
    Wenn du ein selbstsigniertes Zertifikat oder eine eigene CA benutzt, musst du:
    das Root-CA-Zertifikat auf jedem Rechner importieren (System-Zertifikatspeicher / Browser-Zertifikate),
    dann ist HTTPS ohne Warnung möglich.


===


```bash
mkcert nextcloud.home.lan
```


```bash
openssl req -x509 -nodes -days 365 \
  -newkey rsa:2048 \
  -keyout tls.key \
  -out tls.crt \
  -subj "/CN=nextcloud.local/O=LocalCluster"
```


```bash
kubectl -n default create secret tls nextcloud-tls \
  --cert=nextcloud.crt \
  --key=nextcloud.key
```

```text
tls:
  - hosts:
      - nextcloud.local
    secretName: nextcloud-tls
    ...
```

---

## 🔐 1. Grundidee: Du brauchst eine eigene CA (Certificate Authority)

Damit du beliebig viele Zertifikate für beliebige Dienste erzeugen kannst, brauchst du eine Root CA.
Diese CA unterschreibt später all deine Server- oder Client-Zertifikate.

> ➡️ Du erstellst deine eigene „Mini-Version“ von Let’s Encrypt – nur fürs Homelab.

Vorteile:
- Du brauchst keinen externen Anbieter.
- Du kannst Zertifikate für alles erstellen (Webserver, Docker, k3s Ingress, interne IPs).
- Du kannst lange Laufzeiten nutzen (z. B. 5–10 Jahre).
- Du installierst dein Root-CA-Zertifikat einmalig auf allen Geräten, dann vertraut alles darauf.

---

## 🏛️ 2. Was ist ein Root-Zertifikat?

Ein Root-Zertifikat ist der höchste Vertrauensanker einer Zertifizierungskette.

**Root-CA (höchste Ebene)**
- selbst unterschrieben („self-signed“)
- extrem wichtig → MUSS sicher aufbewahrt werden
- wird auf Clients importiert, damit sie allen darunter signierten Zertifikaten vertrauen

**Intermediate-CA (empfohlen)**
- wird von deiner Root-CA signiert
- erstellt die eigentlichen Serverzertifikate
- Root bleibt offline und sicher

>💡 Im Homelab reicht meist 1 Root-CA direkt.

---

## 🛠️ 3. Wo erstelle ich das am besten? (ANPASSEN)

Empfohlen: Auf einem Gerät, das nicht permanent im Cluster läuft
z. B.
- dein MacBook
- ein separater offline Ordner
- verschlüsselter USB-Stick

NICHT direkt auf dem Kubernetes-Cluster.
Warum? → Wenn jemand das Root-CA-Keyfile bekommt, ist alles kompromittiert.

---

## 🧰 4. Welche Tools kann ich verwenden?

Die zwei populärsten und einfachsten Optionen:

#### Option A (TOP Empfehlung): mkcert

Einfach, perfekt für Homelab & Dev.

Vorteile:
- automatisches Root-CA erstellen
- CA in Windows/macOS/Linux installieren
- Zertifikate erzeugen mit 1 Befehl
- funktioniert auch für IP-Adressen (z. B. 192.168.1.10)
- funktioniert auch für Kubernetes Ingress

```bash
brew install mkcert
brew install nss   # optional für Firefox Warum Firefox extra?
```

```bash
mkcert -install
```

```bash
mkcert myserver.local 192.168.1.50 # erstellt der befehl 2 oder name auf die ip
```

➡️ Ergebnis:
- myserver.local.pem
- myserver.local-key.pem

---

#### Option B: step-ca (professioneller Ansatz)
Eine richtige, vollwertige Mini-PKI.
Ideal wenn:
- du viele Zertifikate automatisiert willst
- Kubernetes automatisch Zertifikate ausstellen soll
- mTLS etc. nutzen möchtest

Installation:
```bash
brew install step
```
CA erstellen:
```bash
step ca init
```
Danach kannst du Zertifikate wie bei Let’s Encrypt automatisch mit ACME ausstellen.

---

## 💡 5. Wie sieht der Ablauf im Homelab aus?
Schritt 1 – Root-CA erzeugen (z. B. mit mkcert oder step-ca)
→ CA-Zertifikat auf allen Clients importieren.

Schritt 2 – Zertifikat für deinen Dienst ausstellen
```bash
mkcert nextcloud.lan
mkcert k3s-api.local
mkcert 192.168.1.20
```

Schritt 3 – Zertifikat beim Dienst einbinden

Beispiele:
- nginx: ssl_certificate & ssl_certificate_key
- docker: TLS für Swarm/API
- k3s: Ingress TLS Secret


> Was ist?: Eine kleine „echte“ PKI