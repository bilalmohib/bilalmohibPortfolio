import { chromium } from "file:///C:/Users/My%20Computer/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs";

const out = "E:/PersonalProjects/bilalmohibPortfolio/public/projects";
const browser = await chromium.launch({ channel: "chrome", headless: true });

async function shot(name, url, after) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2500);
  if (after) await after(page);
  await page.screenshot({ path: `${out}/${name}.jpg`, type: "jpeg", quality: 82 });
  await page.close();
}

await shot("beyond-intelligence", "https://www.beyondintelligence.ai/");
await shot("smartlyq", "https://smartlyq.com/", async (page) => {
  const accept = page.getByRole("button", { name: /accept all/i });
  if (await accept.count()) {
    await accept.click();
    await page.waitForTimeout(800);
  }
});

await browser.close();
console.log("previews saved");
