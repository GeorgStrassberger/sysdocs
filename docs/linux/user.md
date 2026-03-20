# User 

Auf Ubuntu/Debian:

---

## Neuen User anlegen

Benutzer erstellen
```bash
adduser muster
```

Benutzer den Guppen hinzufügen
```bash
usermod -aG sudo muster
usermod -aG docker muster
```

User `muster` ist angelegt:
> user:   muster
> pw:     muster_pw
> groups: sudo muster docker

---

## SSH Key anlegen

SSH-KEY erstellen auf dem Client
```bash
ssh-keygen -t ed25519 -f ~/.ssh/vserver_ed25519 -C "vserver-key"
```

SSH-PUB-KEY auf den server kopieren
```bash
ssh-copy-id -i ~/.ssh/vserver_ed25519.pub muster@123.45.678.910
```

---

## Zugang per SSH einrichten

Server login
```bash
ssh muster@123.45.678.910
```

Passwort ändern
```bash
passwd
```

SSH Konfiguration öffnen
```bash
sudo nano /etc/ssh/sshd_config
```

Diese beiden Einstellugnen anpassen, _#_ am anfang der Zeile entfernen
- `PasswordAuthentication no` (verbietet login mit passwort)
- `PubkeyAuthentication yes` (erlaubt nur noch login mit bekannten ssh-pub-key)

SSH Service neustarten um die Einstellungen zu übernehmen.
```bash
sudo systemctl restart ssh
```
Server auslogen
```bash
exit
```

Server login
```bash
ssh muster@123.45.678.910
```

---

## SSH Config anlegen (empfohlen)

Config Datei erstellen
```bash
nano ~/.ssh/config
```

Konfiguration:
```text
Host vserver
    HostName 123.45.678.910
    User muster
    IdentityFile ~/.ssh/vserver_ed25519
    IdentitiesOnly yes
```

Erklärung:
- Host vserver → Alias (so verbindest du dich später)
- HostName → IP oder Domain des Servers
- User → z. B. root, ubuntu, etc.
- IdentityFile → dein ED25519 Key
- IdentitiesOnly yes → verhindert falsche Key-Versuche

```bash
ssh vserver
```

---