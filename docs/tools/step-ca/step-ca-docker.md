# Step-CA Docker
---

## Requirements
- To interact with step-ca, you'll want to install the step client in your host environment. See our installation docs.

## Debian/Ubuntu
To add Smallstep as a source and install the step-cli package on Debian or Ubuntu distributions, run the following as root:
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
apt-get update && apt-get -y install step-cli
```

## Step-CA init

Volume erstellen
```bash
docker volume create step
```


```bsah
docker run -it --rm -v step:/home/step smallstep/step-ca \
	step ca init --remote-management
```

- What deployment type wuld you like to configure? = `Standalone`
-️ What would you like to name your new PKI = `Homelab CA`
- What DNS name or IP assresses will clients use to reach your CA? = `stepca.home.arpa,192.168.178.52,localhost,fujitsu` 
- What IP and port will your new CA bind to? = `:9000`
- What would you like to name the CA's first provisioner? = gest
- Choose a password for your CA keys and first provisioner. = sIlmF&amCs86a

```text
Generating root certificate... done!
Generating intermediate certificate... done!

✔ Root certificate: /home/step/certs/root_ca.crt
✔ Root private key: /home/step/secrets/root_ca_key
✔ Root fingerprint: 07689c5397836877aaaaaaaaaaaaaaaaaaaaaaa19fc3d0958824cf9d293ad6f2
✔ Intermediate certificate: /home/step/certs/intermediate_ca.crt
✔ Intermediate private key: /home/step/secrets/intermediate_ca_key
badger 2026/01/30 13:09:06 INFO: All 0 tables opened in 0s
badger 2026/01/30 13:09:06 INFO: Storing value log head: {Fid:0 Len:30 Offset:2932}
badger 2026/01/30 13:09:06 INFO: [Compactor: 173] Running compaction: {level:0 score:1.73 dropPrefixes:[]} for level: 0
badger 2026/01/30 13:09:06 INFO: LOG Compact 0->1, del 1 tables, add 1 tables, took 15.198191ms
badger 2026/01/30 13:09:06 INFO: [Compactor: 173] Compaction for level: 0 DONE
badger 2026/01/30 13:09:06 INFO: Force compaction on level 0 done
✔ Database folder: /home/step/db
✔ Default configuration: /home/step/config/defaults.json
✔ Certificate Authority configuration: /home/step/config/ca.json
✔ Admin provisioner: gest (JWK)
✔ Super admin subject: step

Your PKI is ready to go. To generate certificates for individual services see 'step help ca'.

FEEDBACK 😍 🍻
  The step utility is not instrumented for usage statistics. It does not phone
  home. But your feedback is extremely valuable. Any information you can provide
  regarding how you’re using `step` helps. Please send us a sentence or two,
  good or bad at feedback@smallstep.com or join GitHub Discussions
  https://github.com/smallstep/certificates/discussions and our Discord
  https://u.step.sm/discord.
```

Passwort-Datei ins Volume schreiben
Ersetze MEINPASSWORT durch dein Passwort vom Init:
```bash
docker run --rm -v step:/home/step alpine sh -lc \
'umask 077; mkdir -p /home/step/secrets; printf "%s" "sIlmF&amCs86a" > /home/step/secrets/password; ls -l /home/step/secrets/password'

-rw-------    1 root     1000            13 Jan 30 13:11 /home/step/secrets/password
```

Rechte für die datei anpassen
```
docker run --rm -v step:/home/step alpine sh -lc \
'chown 1000:1000 /home/step/secrets/password && chmod 600 /home/step/secrets/password && ls -l /home/step/secrets/password'
```


Step-ca als Server starten
Container starten
```bash
docker run -d \
  --name step-ca \
  -p 9000:9000 \
  -v step:/home/step \
  smallstep/step-ca
```
Output Contianer ID: `f73c64219cff05aaaaaaaaaaaaaaaaaaaaaaac7a21e8c6ce7392e6ff253d5b4`

Check:
```bash
docker ps --filter name=step-ca
docker logs step-ca --tail=50
curl -k https://127.0.0.1:9000/health
```


Fingerprint anzeigen (optional)
```
docker run --rm -v step:/home/step smallstep/step-ca \
  step certificate fingerprint /home/step/certs/root_ca.crt
```
Output = `07689c5397836877aaaaaaaaaaaaaaaaaaaaaaa19fc3d0958824cf9d293ad6f2`


Bootstrap auf dem host
```bash
step ca bootstrap \
  --ca-url https://stepca.home.arpa:9000 \
  --fingerprint 07689c5397836877aaaaaaaaaaaaaaaaaaaaaaa19fc3d0958824cf9d293ad6f2
```
Output: 
```text
The root certificate has been saved in /home/gest/.step/certs/root_ca.crt.
The authority configuration has been saved in /home/gest/.step/config/defaults.json.
```

> Wenn die frage kommt:
> ✔ Would you like to overwrite /home/gest/.step/certs/root_ca.crt [y/n]: `y`
> The root certificate has been saved in /home/gest/.step/certs/root_ca.crt.
> ✔ Would you like to overwrite /home/gest/.step/config/defaults.json [y/n]: `y`
> The authority configuration has been saved in /home/gest/.step/config/defaults.json


Verbindung testen auf dem Host
```bash
step ca health
ok
```

Test Zertifikat erstellen
```bash
step ca certificate test.home.arpa test.crt test.key --provisioner gest
✔ Provisioner: gest (JWK) [kid: 3tELeXU_M6OSSSSSSSSSSSSSSSSSDDo9MuiWcdxzI]
Please enter the password to decrypt the provisioner key:
✔ CA: https://stepca.home.arpa:9000
✔ Certificate: test.crt
✔ Private Key: test.key
```
Werden in dem aktuellen ordner erstellt. 

Konfiguration überprüfen
```bash
cat ~/.step/config/defaults.json
{
  "ca-url": "https://stepca.home.arpa:9000",
  "fingerprint": "07689c5397836877aaaaaaaaaaaaaaaaaaaaaaa19fc3d0958824cf9d293ad6f2",
  "root": "/home/gest/.step/certs/root_ca.crt"
}o
```

Provisioner ausgeben
```bash
step ca provisioner list
```


Intermediate CA aus dem Volume auf den Host kopieren.
```bash
docker run --rm -v step:/home/step -v ~/docker/npm/certs:/out alpine \
  cp /home/step/certs/intermediate_ca.crt /out/
```

