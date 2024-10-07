const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const outputDir = 'poster_png';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const htmlFiles = fs.readdirSync('poster_html').filter(file => file.endsWith('.html'));

    for (const htmlFile of htmlFiles) {
        const filePath = path.join(__dirname, 'poster_html', htmlFile);
        
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2' });

        // 设置宽度为720，自动计算高度
        await page.setViewport({ width: 720, height: 0 }); // height=0以计算自适应高度
        const bodyHandle = await page.$('body');
        const { height } = await bodyHandle.boundingBox();
        await bodyHandle.dispose();

        // 重新设置viewport高度
        await page.setViewport({ width: 720, height: Math.ceil(height),deviceScaleFactor: 3});

        // 截图并保存
        const screenshotPath = path.join(outputDir, `${path.parse(htmlFile).name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
    }

    await browser.close();
})();