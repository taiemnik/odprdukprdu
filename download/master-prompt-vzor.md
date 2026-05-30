# Master Prompt — vzor výstupu (Fáze 3 Krytona)

Toto je **ukázka**, co má Kryton vygenerovat na konci. Zkopíruj do Claude / Cursor / Lovable a uprav detaily.

---

## Projekt: QR Platby — školka bez chaosu

### Diagnóza
Rodiče platí více poplatků s různými VS a dělají chyby v částce. Potřebují jedno místo, kde vyberou typ platby a dostanou QR + přehled údajů.

### MVP — Přeživší funkce
- Předvyplněné šablony typů plateb (název, částka, VS)
- Volitelné jméno dítěte jen pro zobrazení (bez ukládání)
- Tlačítko „Vygenerovat platební údaje“ + QR (SPD demo)
- Konfigurovatelné číslo účtu nahoře (testovací údaje)
- Disclaimer: ověřit u účetní školy

### Architektura
- **Výstup:** jeden HTML soubor (Claude Artifact)
- **Stack:** HTML5 + Tailwind CDN + Vanilla JS
- **Data:** pouze v prohlížeči, žádný backend
- **Bezpečnost:** žádná produkční data v promptu

---

## MASTER PROMPT

```
Jsi expert frontend developer. Vytvoř jednoduchou jednostránkovou webovou aplikaci pro rodiče — platby na školku/kroužky.

Stack:
- HTML5 s Tailwind CSS přes CDN
- Vanilla JavaScript (žádné frameworky)
- Vše v jednom souboru, bez backendu

Funkce:
1. Konfigurovatelné číslo účtu nahoře (placeholder, ne reálné produkční číslo)
2. Předvyplněné šablony plateb: strava, družina, kroužek (částka, VS, poznámka)
3. Volitelné pole jméno dítěte — jen zobrazení, nepersistuj
4. Tlačítko „Vygenerovat platební údaje“ — přehled + QR (SPD přes CDN knihovnu, nebo demo text)
5. Responzivní layout, čeština, disclaimer že jde o demo

UI/UX:
- Čistý, mobilní first, světlé pozadí, zelené CTA tlačítko
- Srozumitelné popisky pro netechnické rodiče

Omezení:
- Žádné API klíče
- Žádné ukládání dat na server
- Veškerá data zpracována lokálně v prohlížeči
- Okomentuj hlavní části kódu stručně
```

---

*Vygenerováno workflow Kryton · Od prdu k PRDu*
