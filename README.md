# Od prdu k PRDu — web hub

Přednáška Vibecoding Festival · CERNA.AI · Ambasadorství MSK.

**Live:** [https://taiemnik.github.io/odprdukprdu/](https://taiemnik.github.io/odprdukprdu/)

## Struktura

| Cesta | Účel |
|-------|------|
| `index.html` | Landing + QR |
| `prezentace/` | 8 slidů 16:9, PDF export (Ctrl+P) |
| `materialy/` | Kryton hub — Claude / ChatGPT / Gemini |
| `download/` | Markdown ke stažení |

## Deploy z vaultu

```powershell
cd "c:\Users\prochajo\Můj disk\!MYNOBELBRAIN"
git remote add odprdukprdu https://github.com/taiemnik/odprdukprdu.git  # jednorázově
.\02_Work\Ambasadorství` MSK\vibecodingfest\push-web-only.ps1
```

GitHub Pages: repo **Settings → Pages → Deploy from branch → main / root**.
