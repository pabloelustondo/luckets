const puppeteer = require('puppeteer');

const lucketsHost4Testing = 'http://localhost:3000/';
(async () => {
  //  const browser = await puppeteer.launch(); //headless by default
    const browser = await puppeteer.launch({headless: false}); //headless by default
    const page = await browser.newPage();
    await page.goto(lucketsHost4Testing);
    await page.screenshot({path: 'luckets-page0.png'});

    await browser.close();
})();