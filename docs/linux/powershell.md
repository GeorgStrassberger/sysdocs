# PowerShell

---

Grundlegende Syntax: Verb-Nomen

Dsa **Verb** beschreibt die *Aktion*, und ds **Substantiv / Nomen** gibt das *Objekt* an, für das die Aktion ausgeführt wird.

***Beispiel:***

> **EN** `Get-Content`: Retrieves (get) the content of a file and displays it in the console
>
> **DE** `Abrufen-Inhalt`: Ruft den Inhalt einer Datei ab und zeigt ihn in der Konsole an.

> **EN** `Set-Location: Changes` (sets) the current working directory.
>
> **DE** `Setzen-Ort`: Ändert (setzt) das aktuelle Arbeitsverzeichnis.
 

---


`Get-Command` - Gibt alle verfügbaren Cmdlets, Funktionen, Aliase und Skripts als liste aus, die in der aktuellen PowerShell-Sitzung ausgeführt werden können.

`Get-Command -CommandType "Function"` Gibt alle verfügbaren Funktionen aus.

`Get-Help` Zeigt die Hilfe zur Windows PowerShell an.

`Get-Help Get-Command` Zeigt die Hilfe für *Get-Command* an.

`Get-Alias` Zeigt alle verfügbaren Aliase auf, z.B. `cat` -> `Get-Content`, `cd` -> `Set-Location`, `clear` -> `Clear-Host`, ...

