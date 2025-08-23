# Deprecated Interface

***2 Star Challenge 6/23***

Use a deprecated B2B interface that was not properly shut down.

---

Für diese Aufgabe musst du dich mit deinem fake-account einloggen.

Unter dem Reiter "Complaint" [Reklamation/Beschwerde] kann man eine Nachricht abschicken und eine Datei mit anhängen.

Dafür untersuchen wir wieder im Browser und den DevTools die main.js, mach den begriff "Mime" und finden ein Array namens `allowedMimeType`.
Das uns alle erlaubten Datentypen ausgibt.

````json
{
  "allowedMimeType": [
    'application/pdf',
    'application/xml',
    'text/xml',
    'application/zip',
    'application/x-zip-compressed',
    'multipart/x-zip',
    'application/yaml',
    'application/x-yaml',
    'text/yaml',
    'text/x-yaml'
  ]
}
````

Jetzt einfach eine example.xml datei erstellen, als anhand auswählen mit absenden.


:::success Challenge completed!
You successfully solved a challenge: Deprecated Interface (Use a deprecated B2B interface that was not properly shut down.)
:::



