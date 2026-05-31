const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "prezentace", "index.html");
const outPath = path.join(root, "download", "odprdukprdu-prezentace.pdf");
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");

async function waitForImages(page, selector) {
  await page.evaluate(async (sel) => {
    const imgs = [...document.querySelectorAll(sel)];
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0) resolve();
            else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      )
    );
  }, selector);
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox", "--allow-file-access-from-files"],
  });
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 120000 });

  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    if (typeof window.preparePrintLayout === "function") window.preparePrintLayout();
    document.querySelectorAll(".slide").forEach((s) => {
      s.style.display = "flex";
      s.style.opacity = "1";
      s.classList.add("active");
    });
  });

  await waitForImages(page, ".slide-qr img");
  await page.emulateMediaType("print");

  await page.pdf({
    path: outPath,
    width: "297mm",
    height: "210mm",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  const stat = fs.statSync(outPath);
  console.log("PDF hotovo:", outPath);
  console.log("Velikost:", Math.round(stat.size / 1024), "KB");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
