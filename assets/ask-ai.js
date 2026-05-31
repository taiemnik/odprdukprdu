/**
 * Zeptej se AI — prompt přímo v URL (?q=), stačí Enter v chatu.
 * Web + GitHub odprdukprdu.
 */
(function () {
  var WEB = "https://taiemnik.github.io/odprdukprdu/";
  var GITHUB = "https://github.com/taiemnik/odprdukprdu";

  var PROMPT =
    "Jsem na Vibecoding festivalu a je tady úplně skvělá prezentace a jsem z ní nadšený, tady jsou zdroje:\n\n" +
    "Web: " +
    WEB +
    "\n" +
    "GitHub: " +
    GITHUB +
    "\n\n" +
    "Přečti si je a budu se tě ptát na souvislosti.";

  var encoded = encodeURIComponent(PROMPT);

  /* q= — nativní předvyplnění (ChatGPT, často i Claude/Gemini) */
  var URLS = {
    chatgpt: "https://chatgpt.com/?q=" + encoded,
    claude: "https://claude.ai/new?q=" + encoded,
    gemini: "https://gemini.google.com/app?q=" + encoded,
  };

  function toast(msg) {
    var el = document.getElementById("ai-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ai-toast";
      el.className = "ai-toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(function () {
      el.classList.remove("show");
    }, 2800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function () {
          return legacyCopy(text);
        }
      );
    }
    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.style.cssText = "position:fixed;left:-9999px;opacity:0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_) {}
    area.remove();
    return ok;
  }

  function init() {
    if (document.getElementById("ai-palette-container")) return;

    var root = document.createElement("div");
    root.className = "ai-palette-container";
    root.id = "ai-palette-container";
    root.innerHTML =
      '<button type="button" id="ai-palette-btn" class="ai-palette-btn" aria-expanded="false" aria-controls="ai-palette-menu" aria-haspopup="true">' +
      "🤖 Zeptej se AI" +
      "</button>" +
      '<div class="ai-palette-menu" id="ai-palette-menu" role="menu">' +
      '<div class="ai-menu-header">Otevřít s instrukcí v chatu</div>' +
      '<p class="ai-menu-hint">Text je v odkazu — stačí Enter.</p>' +
      '<a class="ai-menu-item" role="menuitem" data-ai="chatgpt" href="' +
      URLS.chatgpt +
      '" target="_blank" rel="noopener noreferrer">ChatGPT</a>' +
      '<a class="ai-menu-item" role="menuitem" data-ai="claude" href="' +
      URLS.claude +
      '" target="_blank" rel="noopener noreferrer">Claude</a>' +
      '<a class="ai-menu-item" role="menuitem" data-ai="gemini" href="' +
      URLS.gemini +
      '" target="_blank" rel="noopener noreferrer">Gemini</a>' +
      '<div class="ai-menu-divider"></div>' +
      '<button type="button" class="ai-menu-item" id="ai-copy-prompt">📋 Kopírovat instrukci</button>' +
      "</div>";

    var mount = document.getElementById("dock-ai-mount");
    (mount || document.body).appendChild(root);

    var btn = document.getElementById("ai-palette-btn");
    var copyBtn = document.getElementById("ai-copy-prompt");
    var links = root.querySelectorAll("a.ai-menu-item");

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = root.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) {
        root.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        root.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    copyBtn.addEventListener("click", function () {
      copyText(PROMPT).then(function (ok) {
        toast(ok ? "Instrukce zkopírována" : "Zkopíruj text z libovolného odkazu výše");
        root.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        root.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
