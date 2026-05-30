# Prompt: Jednoduchá webová appka „QR platby pro rodiče“ (Claude / ChatGPT s artefaktem)

**Účel:** Ukázka, že z **jasného popisu problému** jde rychle vyrobit užitečný nástroj.  
**Bezpečnost:** Nepoužívej reálná čísla účtů ani jména dětí z produkce — jen **vzorové / testovací** údaje.

---

Postav mi jednoduchou **jednostránkovou webovou aplikaci** (HTML + CSS + JavaScript v jednom souboru), která pomůže rodičům s **platbami na školu / školku / kroužky**.

## Kontext problému
- Rodič platí více typů poplatků (např. strava, družina, kroužek).
- Každý typ může mít jinou částku, jiný variabilní symbol nebo poznámku.
- Rodiče dělají chyby v překlepech VS nebo v částce.

## Co má appka umět
1. **Předvyplněné šablony** typů plateb (název, částka v Kč, doporučený variabilní symbol nebo prázdné pole „doplní rodič“).
2. Pole **jméno dítěte** (volitelné, jen pro zobrazení na potvrzení — nepersistuj data).
3. Tlačítko **„Vygenerovat platební údaje“** — zobrazí přehled: částka, VS, poznámka, číslo účtu (zadej jako konfigurovatelné pole nahoře).
4. **QR kód** pro platbu v české bankovní aplikaci — použij veřejně dostupnou knihovnu přes CDN (např. generátor QR z řetězce podle formátu **SPD** pro české platby, pokud to dokážeš bezpečně; pokud ne, vygeneruj QR s textem platebních údajů a jasně napiš uživateli, že jde o **demo** a u reálné školy musí QR ověřit s účetní).
5. Responzivní layout, srozumitelné popisky v **češtině**.
6. Na stránce krátké **upozornění**: „Toto je demonstrační nástroj. Reálné platby vždy ověřte u účetní školy.“

## Technické požadavky
- Jeden soubor nebo artefakt bez externího backendu.
- Žádné ukládání osobních údajů na server (vše jen v prohlížeči).
- Kód okomentuj stručně, co která část dělá.

Začni návrhem UI (wireframe v textu), pak rovnou dodaj funkční kód.
