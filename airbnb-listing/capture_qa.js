import puppeteer from 'puppeteer-core';
import path from 'path';

const BRAVE_PATH = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
const OUT_DIR = 'C:\\Users\\shrey\\.gemini\\antigravity-ide\\scratch\\airbnb-clone\\screenshots';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: BRAVE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1890, height: 870 });

  console.log('Navigating to http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1000));

  // 1. Top of page (Hero, Header)
  console.log('Capturing pos0_top.png...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos0_top.png') });

  // 2. Overview / Guest Favourite
  console.log('Capturing pos1_overview.png...');
  await page.evaluate(() => window.scrollTo(0, 320));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos1_overview.png') });

  // 3. Sticky Nav visible with Description
  console.log('Capturing pos2_stickynav.png...');
  await page.evaluate(() => window.scrollTo(0, 520));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos2_stickynav.png') });

  // 4. Where you'll sleep & Amenities
  console.log('Capturing pos3_sleeping_amenities.png...');
  await page.evaluate(() => {
    const el = document.querySelector('.sleeping');
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -70); // account for sticky nav height
    } else {
      window.scrollTo(0, 950);
    }
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos3_sleeping_amenities.png') });

  // 5. Things to know & More stays nearby (with Location active)
  console.log('Capturing pos4_things_nearby.png...');
  await page.evaluate(() => {
    const el = document.querySelector('.things-to-know');
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -90);
    }
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos4_things_nearby.png') });

  // 6. Amenities modal (with calendar/amenities section in background)
  console.log('Opening amenities modal and capturing pos5_amenities_modal.png...');
  await page.evaluate(() => {
    const el = document.querySelector('.amenities');
    if (el) {
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.scrollBy(0, -100);
    }
    const btn = document.querySelector('.amenities-show-all');
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUT_DIR, 'pos5_amenities_modal.png') });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch((err) => {
  console.error('Error running QA capture:', err);
  process.exit(1);
});
