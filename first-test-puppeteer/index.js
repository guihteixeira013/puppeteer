const puppeteer = require('puppeteer');

console.log("coins converter");

(async () => {
    const browser = await puppeteer.launch( headless, false );   // abrindo navegador
    const page = await browser.newPage();       // abrindo nova pagina
    await page.goto('https://google.com');      // preenchendo URL
    await page.screenshot({path: 'example.png'})// tirando print da página
    console.log("entrou");
    await browser.close();                      // fechando navegador
})