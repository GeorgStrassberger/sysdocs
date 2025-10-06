# PowerShell

---

## Basics

Grundlegende Syntax: Verb-Nomen

Das **Verb** beschreibt die *Aktion*, und das **Substantiv / Nomen** gibt das
*Objekt* an, für das die Aktion ausgeführt wird.


> **EN** `Get-Content`: Retrieves (get) the content of a file and displays it in the console
>
> **DE** `Abrufen-Inhalt`: Ruft den Inhalt einer Datei ab und zeigt ihn in der Konsole an.


> **EN** `Set-Location`: Changes (sets) the current working directory.
>
> **DE** `Setzen-Ort`: Ändert (setzt) das aktuelle Arbeitsverzeichnis.

---

## Navigation

`Get-Command` - Gibt alle verfügbaren Cmdlets, Funktionen, Aliase und Skripts als liste aus, die in der aktuellen
PowerShell-Sitzung ausgeführt werden können.

`Get-Command -CommandType "Function"` - Gibt alle verfügbaren Funktionen aus.

`Get-Help` - Zeigt die Hilfe zur Windows PowerShell an.

`Get-Help Get-Command` - Zeigt die Hilfe für *Get-Command* an.

`Get-Alias` - Zeigt alle verfügbaren Aliase auf, z.B. `cat` -> `Get-Content`, `cd` -> `Set-Location`, `clear` ->
`Clear-Host`, ...

`Get-ChildItem -Force` - Listet alle inhalte auf und auch die versteckten.

## Piping, Filtering & Sort Data

`Get-ChildItem | Sort-Object Length` - Listet alle elemente nach länge/größe sortiert auf.

`Get-ChildItem | Where-Object -Property "Extension" -eq ".txt"` - Listet alle ".txt" Datein auf.

- `-ne`: "not equal"
- `-gt`: "greater then"
- `-ge`: "Greater than or equal to", A Comination of `-gt` and `-eq`
- `-lt`: "less than"
- `-le`: "less than or equal to", A combination of `-lt` and `-eq`

`Get-ChildItem | Where-Object -Property "Name" -like "ship*"` - Listet alle Elemente auf in denen "ship" vorkommt.

`Get-ChildItem | Select-Object Name,Length` - Listet alle Elemente mit Name & Größe auf.

`Select-String -Path ".\captain-hat.txst" -Pattern "hat"` - Gibt aus der datei die zeilen aus die "hat" enthalten.

## System & Network

```powershell
Get-ComputerInfo

Get-LocalUser

Get-NetIPConfiguration

Get-NetIPAddress
```

## Real-Time System Analysis

```powershell
Get-Process

Get-Service

Get-NetTCPConnection 
```

`Get-FileHash -Path .\ship-flag.txt` - Gibt den Hash der Datei aus

## Scripting

Skripterstellung ist der Prozess des Schreibens und Ausführens einer Reihe von Befehlen in einer Textdatei, die als
Skript bezeichnet wird, um Aufgaben zu automatisieren, die man normalerweise manuell in einer Shell wie PowerShell
ausführen würde.

Vereinfacht ausgedrückt ist Skripterstellung so, als würde man einem Computer eine Aufgabenliste geben, wobei jede Zeile
im Skript eine Aufgabe darstellt, die der Computer automatisch ausführt. Das spart Zeit, verringert die
Fehleranfälligkeit und ermöglicht die Ausführung von Aufgaben, die zu komplex oder zu langwierig sind, um sie manuell
auszuführen.

Für weitere Informationen in der PowersShell:

```powershell
Get-Help Invoke-command -examples
```



