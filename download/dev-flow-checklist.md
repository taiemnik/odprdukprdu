# Dev flow — checklist pro zvědavce a pískoviště

Od **prd** k něčemu, co funguje a jde sdílet. Zaškrtávej po cestě.

---

## 1. PROBLÉM (ne feature)

- [ ] Vím, **kdo** to použije a **co** mu to ušetří
- [ ] Umím popsat úspěch jednou větou („do 30 s najdu…“, „už neplatím špatný VS…“)
- [ ] Zvážil jsem, že řešením nemusí být „apka“ (gameska, tabulka, checklist)

---

## 2. PRD (mapa myšlenky)

- [ ] Mám must-have (max 5) vs nice-to-have (verze 2)
- [ ] Prošel jsem nápad s **Asistentem na prd** nebo šablonou PRD
- [ ] Zeptal jsem AI: „Napiš 3 slabá místa v tomto návrhu“

---

## 3. DATA

- [ ] Vím, co leží na stole (soubory, sloupce, složky) — nebo popis struktury
- [ ] Citlivá data **ne** do cloudu — jen popis + local upload v prohlížeči
- [ ] První iterace: mock / vzorová data, ne produkce

---

## 4. BUILD

- [ ] První cíl: **jeden HTML** nebo artefakt v Claude / Lovable
- [ ] Nedělám registraci, admin panel ani databázi v MVP
- [ ] Iterace po blocích: data → ověř → UI (ne vše v jednom promptu)

---

## 5. SHIP

- [ ] Zeptal jsem AI: „Jak to nasadím na web zdarma?“
- [ ] Mám link (GitHub Pages, Netlify, sdílený artefakt)
- [ ] U interních dat: link nesdílím veřejně

---

## Nástroje podle levelu

| Level | Typicky |
|-------|---------|
| Zvědavce | Claude artefakt, ChatGPT canvas |
| Pískoviště | Lovable, Base44, Cursor s PRD |
| Shipper+ | Cursor + GitHub + bezpečnostní review |

---

*Vibecoding Festival · Od prdu k PRDu · Josef Procházka*
