# Juice Shop Autostart Service

Automatically start the local nodejs server to run the **OWASP Juice Shop** in your browser at [http://localhost:3000](http://localhost:3000) when booting your Kali VM.

## Prerequisites

- Node.js installed
- npm installed
- git
- JuiceShop project cloned into your VM

> **Download links:**
> - Link to [Node.js](https://nodejs.org/en/download)
> - Link to [GitHub/juice-shop](https://github.com/juice-shop/juice-shop)
> - Link to [git-scm](https://git-scm.com/)

---

## Step 1: Get your username

Check your current username:

```bash
whoami
```

Example output: (default = kali)

```bash
kali
```

## Step 2: Create the systemd service file

Run this command to create a new service file:

```bash
sudo nano /etc/systemd/system/juice-shop.service
```

Paste the following content into the file:

```bash
[Unit]
Description=Juice Shop Autostart
After=network.target

[Service]
Type=simple
User=kali
WorkingDirectory=/home/kali/juice-shop
ExecStart=/usr/bin/npm start
Restart=always

[Install]
WantedBy=multi-user.target
```

or if you installed nodejs via `nvm` check the installed path.

````bash
which node
which npm
````
Example output:
````bash
/home/kali/.nvm/versions/node/v20.17.0/bin/node
/home/kali/.nvm/versions/node/v20.17.0/bin/npm
````

and change the `WorkingDirectory=/path/to/node/version`

````json
[Unit]
Description=OWASP Juice Shop Autostart
After=network.target

[Service]
Type=simple
User=gest
WorkingDirectory=/home/kali/juice-shop
ExecStart=/home/kali/.nvm/versions/node/v22.17.0/bin/node build/app
Restart=always

[Install]
WantedBy=multi-user.target
````

Important Hint:

- Change `kali` to your `username`
- Check path to your file `(/home/kali/juice-shop)`

## Step 3: Acticte Service

Enable and start the service with:

```bash
sudo systemctl daemon-reload
sudo systemctl enable juice-shop.service
sudo systemctl start juice-shop.service
```

## Step 4: Check Service is running

Use this command to check the status:

```bash
sudo systemctl status juice-shop.service
```

Expected output:

```bsh
● juice-shop.service - Juice Shop Autostart
   Loaded: loaded (/etc/systemd/system/juice-shop.service; enabled; vendor preset: disabled)
   Active: active (running) since ...
```

## Step 5: Reboot

Reboot your VM:

```bash
sudo reboot
```

After the reboot, open your browser and go to:

```bash
http://localhost:3000
```

If everything is set up correctly, Juice Shop should be running automatically.
