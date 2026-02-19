# Zertifikate

TLS Zertifikate erstellen und anlegen im Homelab

---

INFO 

```text
Browser (DNS Anfrage)
   ↓ 
Pi-hole (nur DNS gibt IP zurück)
   ↓ 
Browser (HTTP/HTTPS Verbindung)
   ↓ 
NPM (Reverse Proxy)
   ↓
Webpage / Service
```

---

1. Zertifikat erstellen

Auf dem PVE LXC Container einloggen und das Zertifikat mit step erstellen.

```bash
step ca certificate pihole.home.arpa pihole.crt pihole.key --provisioner gest
```
Passwort eingeben.

---

2. Zertifikate holen

Zertifikate auf den Rechner ziehen um sie über die Browser oberfläche zuweisen zu können.
```bash
cd USERPROFILE\Downloads
scp gest@192.168.178.55:~/docker/npm/certs/pihole.crt .
scp gest@192.168.178.55:~/docker/npm/certs/pihole.key .
scp gest@192.168.178.55:~/docker/npm/certs/intermediate_ca.crt .
```

---

3. Browser öffnen unter (Nginx Proxy Manager)[http://192.168.178.61:81/].

- Certificates:
	Zertifikat hinzufügen
	- Name = frei wählen (pihole)
	- Certificate Key = pihole.key
	- Certificate = pihole.crt
	- Intermediate Certificate = intermediate_ca.crt

- Hosts: 
	Proxy Hosts hinzufügen
		Details
			- Domain Names = pihole.home.arpa
			- schema = http
			- Forward Ip = 192.168.178.51
			- Forward Port = 8080
		SSL
			- Benutzerdefiniertes Zertifikat auswählen
			- SSL erzwingen
			- HTTP/2 Support
		Pfad
			- Pad Hinzufügen wenn auf einen unter pfad wie z.B `/admin` weitergeleitet werden soll.

- DNS (PiHole) System -> Settings -> Local DNS Records
  	- Domain: pihole.home.arpa
	- IP: 192.168.178.61

---

__Hinweis:__
Der lokale DNS server muss im Router angegeben werden, das zuerst im Heimnetz gesucht wird und anschließend im Internet. Sonst werden die Seiten nicht gefunden.

__Hinweis:__
Das `root-ca.crt` muss auf den Geräten im Heimnetz einmal installiert werden z.B _Handy_, _PC_, _Laptop_, _Tablet_ damit Sie auch die einzellnen Zertifikate erkennen und als vertrauenswürdig einstufen können.

