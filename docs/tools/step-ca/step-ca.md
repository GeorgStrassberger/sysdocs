# Step-CA

https://smallstep.com/docs/step-ca/installation/#debianubuntu

---

## Debian/Ubuntu
To add Smallstep as a source and install the step-cli and step-ca packages on Debian or Ubuntu distributions, run the following as root:

```bash
apt-get update && apt-get install -y --no-install-recommends curl gpg ca-certificates
curl -fsSL https://packages.smallstep.com/keys/apt/repo-signing-key.gpg -o /etc/apt/keyrings/smallstep.asc
cat << EOF > /etc/apt/sources.list.d/smallstep.sources
Types: deb
URIs: https://packages.smallstep.com/stable/debian
Suites: debs
Components: main
Signed-By: /etc/apt/keyrings/smallstep.asc
EOF
apt-get update && apt-get -y install step-cli step-ca
```

---

Version ausgeben lassen
```bash
root@stepca:~# step -v
Smallstep CLI/0.29.0 (linux/amd64)
Release Date: 2025-12-03T04:11:27Z
```

Step CA initialisieren (erstellen)
```bash
step ca init

- What deployment type would you like to configure?:
✔ Deployment Type: Standalone

- What would you like to name your new PKI?
✔ (e.g. Smallstep): Homelab CA

- What DNS names or IP addresses will clients use to reach your CA?
✔ (e.g. ca.example.com[,10.1.2.3,etc.]): stepca.home.lab,192.168.178.55,*.home.lab

- What IP and port will your new CA bind to? (:443 will bind to 0.0.0.0:443)
✔ (e.g. :443 or 127.0.0.1:443): 0.0.0.0:9000

- What would you like to name the CA's first provisioner?
✔ (e.g. you@smallstep.com): gest

- Choose a password for your CA keys and first provisioner.
✔ [leave empty and we'll generate one]: in_NordPass

Generating root certificate... done!
Generating intermediate certificate... done!

✔ Root certificate: /root/.step/certs/root_ca.crt
✔ Root private key: /root/.step/secrets/root_ca_key
✔ Root fingerprint: b59d121111111111111111a35bb8977daddcf76e605608a9f8e7840bde9fa9a3
✔ Intermediate certificate: /root/.step/certs/intermediate_ca.crt
✔ Intermediate private key: /root/.step/secrets/intermediate_ca_key
✔ Database folder: /root/.step/db
✔ Default configuration: /root/.step/config/defaults.json
✔ Certificate Authority configuration: /root/.step/config/ca.json

Your PKI is ready to go. To generate certificates for individual services see 'step help ca'.

FEEDBACK 😍 🍻
  The step utility is not instrumented for usage statistics. It does not phone
  home. But your feedback is extremely valuable. Any information you can provide
  regarding how you’re using `step` helps. Please send us a sentence or two,
  good or bad at feedback@smallstep.com or join GitHub Discussions
  https://github.com/smallstep/certificates/discussions and our Discord
  https://u.step.sm/discord.
```

---

Step-CA starten - (terminal is blocked), am besten später in ein *systemd-service* auslagen.
```bash
step-ca /root/.step/config/ca.json
```


## ACME

Neuen *Provisioner* hinzufügen für ACME, 
Wenn nach eine Passowrt gefragt wird das von `gest (admin)` eingeben.

In einem zweiten Terminal (oder SSH-Session):
```bash
step ca provisioner add acme --type ACME
```

Aktive sitzung einmal beenden und neu starten um die änderungen zu übernehmen.
In einem ersten Terminal (oder SSH-Session):
```bash
strg + c
step-ca /root/.step/config/ca.json
```

In einem zweiten Terminal (oder SSH-Session):
Liste der Provisioner ausgeben lassen.
```bash
step ca provisioner list
[
   {
      "type": "JWK",
      "name": "gest",
	  ...
	},
	{
      "type": "ACME",
      "name": "acme",
	  ...
   }
]
```

ACME-Endpoint (für Traefik) ist jetzt aktiv unter:
```bash
https://stepca.home.lab:9000/acme/acme/directory
```

---

## Systemd-Service anlegen

Dass der Service starten kann benötigt er das passwort, dazu müsen wir eine `password.txt` datei anlegen und das *provisioner gest* passwort eintragen.
```
nano /root/.step/secrets/password.txt
```

Service-Datei erstellen
```bash
nano /etc/systemd/system/step-ca.service
```

Inhalt:
```bash
[Unit]
Description=Smallstep Certificate Authority
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root
ExecStart=/usr/bin/step-ca /root/.step/config/ca.json --password-file /root/.step/secrets/password.txt
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Aktivieren & starten
```bash
systemctl daemon-reload
systemctl enable step-ca
systemctl start step-ca
systemctl status step-ca
```

Testen 
```bash
ss -lntp | grep ':9000' || true
curl -k https://127.0.0.1:9000/health

{"status":"ok"}
```
---

nächste schritte
Zertifikat local installieren 