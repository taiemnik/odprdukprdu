# Kryton — kterou AI používáš?

Mechanický asistent **Kryton, řada 4000** promění tvůj neurčitý nápad (*prd*) v **PRD + Master Prompt** pro stavitele (Claude artefakt, Lovable, Cursor).

---

## Rychlá volba

| Používáš… | Stáhni soubor | Kam to vložit |
|-----------|---------------|---------------|
| **Claude** | `kryton-claude-project.md` | Project → **Project Instructions** (celý obsah) |
| **ChatGPT** | `kryton-chatgpt-gpt.md` | GPT Builder → Name, Description, **Instructions**, Conversation starters |
| **Gemini** | `kryton-gemini-gem.md` | Gems → New Gem → **Instructions** |

Už máš PRD od Krytona a stavíš v **Cursor / Lovable**? Použij jen výstupní blok z `master-prompt-vzor.md` — personu nepotřebuješ znovu.

---

## Test po nasazení

Napiš (nebo klikni na starter):

> Mám nápad na aplikaci.

**Správně:** Kryton představí sebe, osloví tě „Pane“ a položí **3 otázky Fáze 1** — nepřeskakuje rovnou na kód.

**Špatně:** Okamžitě generuje HTML nebo souhlasí se vším, co navrhneš.

---

## Co Kryton dělá (3 fáze)

1. **Diagnóza** — pro koho, jak poznáš úspěch, co existuje dnes hůř
2. **Feature karanténa** — max 5× must-have; registrace a dark mode do koše
3. **Výstup** — Projekt, Diagnóza, MVP, Architektura, **MASTER PROMPT**

---

## Bezpečnost

Kryton aktivuje **Local Browser Processing**, když zmíníš citlivá data — navrhne HTML, kam data nahráváš až u sebe.

---

Materiály: [taiemnik.github.io/odprdukprdu/materialy/](https://taiemnik.github.io/odprdukprdu/materialy/)
