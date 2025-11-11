# Dateisystem

Verzeichnisse Grundstruktur

---

## Root-Verzeichnis `/`

Das `root` Verzeichnis ist das Hauptverzeichnis des Dateisystems.
In diesem Beispiel von `Ubuntu 24.04.3`

```bash
➜  ~ ls -la /
total 4194396
drwxr-xr-x  23 root root       4096 Jan 29  2025 .
drwxr-xr-x  23 root root       4096 Jan 29  2025 ..
lrwxrwxrwx   1 root root          7 Apr 22  2024 bin -> usr/bin
drwxr-xr-x   2 root root       4096 Feb 26  2024 bin.usr-is-merged
drwxr-xr-x   4 root root       4096 Okt 31 06:08 boot
dr-xr-xr-x   2 root root       4096 Aug 27  2024 cdrom
drwxr-xr-x  19 root root       4180 Okt 23 14:11 dev
drwxr-xr-x 115 root root       4096 Okt 31 06:08 etc
drwxr-xr-x   3 root root       4096 Jan 29  2025 home
lrwxrwxrwx   1 root root          7 Apr 22  2024 lib -> usr/lib
lrwxrwxrwx   1 root root          9 Apr 22  2024 lib64 -> usr/lib64
drwxr-xr-x   2 root root       4096 Feb 26  2024 lib.usr-is-merged
drwx------   2 root root      16384 Jan 29  2025 lost+found
drwxr-xr-x   2 root root       4096 Aug 27  2024 media
drwxr-xr-x   2 root root       4096 Aug 27  2024 mnt
drwxr-xr-x   3 root root       4096 Jan 29  2025 opt
dr-xr-xr-x 245 root root          0 Okt 23 14:11 proc
drwx------   7 root root       4096 Okt 28 08:39 root
drwxr-xr-x  36 root root       1120 Nov 10 12:22 run
lrwxrwxrwx   1 root root          8 Apr 22  2024 sbin -> usr/sbin
drwxr-xr-x   2 root root       4096 Apr  3  2024 sbin.usr-is-merged
drwxr-xr-x   2 root root       4096 Jan 29  2025 snap
drwxr-xr-x   2 root root       4096 Aug 27  2024 srv
-rw-------   1 root root 4294967296 Jan 29  2025 swap.img
dr-xr-xr-x  13 root root          0 Nov 10 12:23 sys
drwxrwxrwt  14 root root       4096 Nov 10 12:22 tmp
drwxr-xr-x  12 root root       4096 Aug 27  2024 usr
drwxr-xr-x  13 root root       4096 Jan 29  2025 var
```

---

## Erklärung des Befehls

```bash
ls -la /
```

- `ls` = listet Dateien und Verzeichnisse auf
- `-l` = „long listing“ → zeigt Details wie Rechte, Besitzer, Größe, Datum usw.
- `-i` = zeigt die Inode-Nummer jeder Datei an
- `-s` = zeigt die Blockgröße (Speicherverbrauch auf der Festplatte)
- `-a` = „all“ → zeigt auch versteckte Dateien (die mit `.` beginnen)
- `/` = Wurzelverzeichnis (root directory, oberste Ebene im Dateisystembaum)

---

## Erklärung der Spalten

```bash
drwxr-xr-x  23 root root       4096 Jan 29  2025 .
```

| Spalte | Bedeutung                   | Beispiel        |
|:-------|:----------------------------|:----------------|
| 1      | Dateityp & Berechtigungen   | `drwxr-xr-x`    |
| 2      | Anzahl der Hardlinks        | `23`            |
| 3      | Besitzer (User)             | `root`          |
| 4      | Gruppe                      | `root`          |
| 5      | Dateigröße in Bytes         | `4096`          |
| 6-8    | (letztes) Änderungsdatum    | `Jan 29 2025`   |
| 9      | Dateiname / Verzeichnisname | `.`             |

---

## Erklärung der Berechtigungen (`d` | `rwx` | `r-x` | `r-x`)

Das erste Zeichen Typ
- `d` = directory (Verzeichnis)
- `-` = Datei
- `l` = Link (Verknüpfung / Symlink)

Die nächsten 9 Zeichen → Rechte (jeweils 3 für User, Gruppe, andere)
- `r` = read
- `w` = write
- `x` = execute (oder „betreten“ bei Verzeichnissen)

---

## Erklärung der einzelnen Zeilen im Root-Verzeichnis `/`

| Name                 | Typ           | Beschreibung                                                                              |
| -------------------- | ------------- |-------------------------------------------------------------------------------------------|
| `.`                  | Verzeichnis   | Das aktuelle Verzeichnis (root selbst).                                                   |
| `..`                 | Verzeichnis   | Das übergeordnete Verzeichnis (bei `/` ebenfalls `/`).                                    |
| `bin -> usr/bin`     | Symlink       | Zeigt auf `/usr/bin`. Enthält Systemprogramme und Shell-Befehle (z. B. `ls`, `cp`, `mv`). |
| `boot`               | Verzeichnis   | Dateien zum Systemstart (Kernel, Initramfs, Bootloader).                                  |
| `cdrom`              | Verzeichnis   | Mount-Punkt für CD/DVDs.                                                                  |
| `dev`                | Verzeichnis   | Geräte-Dateien `device` (z. B. `/dev/sda`, `/dev/null`). Virtuelles Dateisystem.          |
| `etc`                | Verzeichnis   | Systemkonfigurationen (z. B. `/etc/passwd`, `/etc/network/interfaces`).                   |
| `home`               | Verzeichnis   | Benutzerverzeichnisse (z. B. `/home/username`).                                           |
| `lib -> usr/lib`     | Symlink       | Bibliotheken (Programme nutzen sie ähnlich wie DLLs in Windows).                          |
| `lib64 -> usr/lib64` | Symlink       | 64-bit-Bibliotheken.                                                                      |
| `lost+found`         | Verzeichnis   | Wiederhergestellte Dateifragmente nach Dateisystemfehlern.                                |
| `media`              | Verzeichnis   | Automount-Punkt für externe Medien (z. B. USB-Sticks).                                    |
| `mnt`                | Verzeichnis   | Temporärer Mount-Punkt für manuelle Einbindungen (z. B. USB-Sticks).                      |
| `opt`                | Verzeichnis   | Optionale Software, meist Drittanbieter (z. B. `/opt/vmware`, `/opt/iobroker`).           |
| `proc`               | Virtuelles FS | System- und Prozessinfos (z. B. `/proc/cpuinfo`). Kein echtes Dateisystem.                |
| `root`               | Verzeichnis   | Home-Verzeichnis des Root-Benutzers (`/root`).                                            |
| `run`                | Virtuelles FS | Laufzeitdaten (z. B. PIDs, temporäre Sockets). Wird bei Boot erstellt.                    |
| `sbin -> usr/sbin`   | Symlink       | Systemadministrationsprogramme (z. B. `fsck`, `reboot`).                                  |
| `snap`               | Verzeichnis   | Snap-Pakete (Ubuntu-Paketformat).                                                         |
| `srv`                | Verzeichnis   | Daten für Serverdienste (z. B. Web- oder FTP-Server).                                     |
| `swap.img`           | Datei         | Swap-Datei (Auslagerungsspeicher).                                                        |
| `sys`                | Virtuelles FS | Kernel- und Hardwareinformationen.                                                        |
| `tmp`                | Verzeichnis   | Temporäre Dateien (`/tmp` wird beim Boot oft geleert).                                    |
| `usr`                | Verzeichnis   | „User system resources“ – Hauptverzeichnis für Programme, Bibliotheken und Doku.          |
| `var`                | Verzeichnis   | Variable Daten wie Logs, Mail, Spools, Webdateien die vom Server ausgeliefert werden.     |

---

Sonderzeichen in den Namen
- `->` = symbolischer Link (Symlink).

Beispiel:
`bin -> usr/bin` heißt: `/bin` ist nur eine Verknüpfung auf `/usr/bin`.

---

Was bedeutet `.usr-is-merged`?

- Ubuntu (und andere moderne Distributionen) haben das Dateisystem „merged /usr layout“:
- Früher gab es getrennte Ordner `/bin`, `/sbin`, `/lib`
- Heute zeigen sie per Symlink auf `/usr/bin`, `/usr/sbin`, `/usr/lib`
- Dateien wie `bin.usr-is-merged` sind Überbleibsel oder Marker, dass diese Zusammenführung aktiv ist.
