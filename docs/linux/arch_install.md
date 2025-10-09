# Arch Linux install Guide

Install Arch Linux step by step on a VM, in this case with Virtual Box.

## Prerequesits

- Download the `archlinux-*.iso` file from [https://archlinux.org/download/](https://archlinux.org/download/)
- Download and install `Virtual Box` or create a usb-bootstick.

### Start Screen

![boot_start_screen.png](img/boot_start_screen.png)

- **Arch Linux install medium (x86_64, UEFI)** 
Du bootest ins Arch-Live-System (von dem ISO), um die Installation zu beginnen.

- **Arch Linux install meduim (x86_64, UEFI) with speech** 
Genau das gleiche wie oben, aber mit Sprach-Ausgabe (Text-to-Speech). Das ist für Menschen gedacht, die sehbehindert sind.

- **Memtest86+**
Ein Programm zum Testen des Arbeitsspeichers (RAM)

- **EFI Shell** - Reboot Into Firmware Interface 
Damit kann man Firmware-Kommandos ausführen.

- **Reboot Into Firmware Interface**
Zurück ins UEFI/BIOS-Menü

Wähle "Arch Linux install medium (x86_64, UEFI)" aus und bestätige es mit `Enter`.

### Live System

Jetzt befinden wir uns im Live-System von Arch Linux, alles läuft im RAM (Arbeitsspeicher) und von hier aus installieren wir es auf die Festplatte.

#### 1. Internet prüfen

Die Installation wird übers Internet gemacht. Also schauen wir zuerst, ob wir eine Verbindung haben.


```bash
ip link
```

![ip_link.png](img/ip_link.png)

```bash
ping -c 3 archlinux.org
```

![ping_archlinux.png](img/ping_archlinux.png)

- Wenn wir eine **Antwort** bekommen mit (Zeit in ms), haben wir eine aktive Internet Verbindung.
- Wenn nicht, muss zu erst eine Internet Verbingung eingerichtet werden.


#### 2. Systemzeit synchronisieren

Arch braucht eine richtige Uhrzeit.

```bash
timedatectl set-ntp true
timedatectl status
```

![timedatectl.png](img/timedatectl.png)

#### 3. Keyboard layout

Alle Tastaturlayouts auflisten.
```bash
localectl list-keymaps
```

Das Tastatur layout auf DEUTSCH umstellen.
```bash
loadkeys de-latin1
```

#### 4. Console fonts
**Console fonts** are located in `/usr/share/kbd/consolefonts/` and can be set. 

```bash
setfont ter-132b
```

#### 5. Partitioning

Liste all verfügbaren Festplatten.

```bash
lsblk
```

![lsblk.png](img/lsblk.png)

- `loop0`:  Das virtuelle Loop-Device. Arch lädt Teile des ISO-Images in den Speicher (RAM)
- `sda`: Das ist deine virtuelle Festplatte in der VM. Hier wird später Arch Linux installiert.
- `sr0`: Das ist dein virtuelles CD/DVD-Laufwerk. Hier liegt gerade das Arch-ISO, von dem du gebootet hast.

