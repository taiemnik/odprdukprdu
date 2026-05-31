# Claude · Project — návod nasazení

## 1. Co otevřít

1. Jdi na **claude.ai** (přihlášený účet).
2. V levém menu **Projects** → **New project**.
3. Pojmenuj projekt např. **Asistent na prd**.

## 2. Kam vložit pokyny

1. V projektu otevři **Project settings** (ozubené kolečko).
2. Pole **Project Instructions** → vlož celý obsah z tlačítka **Pokyny** (Ctrl+A, Ctrl+C, Ctrl+V).
3. Ulož.

## 3. Volitelné

- **Project knowledge:** můžeš přidat cheatsheet (stack, Lovable vs Cursor) — není nutné pro první test.
- **Model:** stačí výchozí Sonnet; role drží instrukce, ne model.

## 4. Co zaškrtnout / nastavit

Claude Project nemá checkboxy jako GPT — stačí **Instructions**. Nepřidávej do projektu jiné system prompty navíc.

## 5. Test

Napiš v chatu projektu:

> Mám nápad na aplikaci.

**Správně:** představí se, osloví „Pane“, položí **3 otázky Fáze 1** — neskočí na kód.

**Špatně:** rovnou generuje HTML nebo souhlasí se vším.

## 6. Sdílení

Project lze sdílet linkem — vhodné pro live demo na festivalu.
