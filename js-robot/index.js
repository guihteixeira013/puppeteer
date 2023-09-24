const puppeteer = require('puppeteer');

console.log('Welcome to the Conversor Bot!');

(async () => {
    // declarando o navegador
    const browser = await puppeteer.launch({ headless: false }); //headless false permite visualizar o processo
    // declarando nova página dentro do navegador
    const page = await browser.newPage();
    
    // preenchendo campo da url como o endereço
    await page.goto('https://google.com');
    // tirando print do site 
    await page.screenshot({path: 'print.png'});
    console.log('THATS OK!')
    // fechando navegador
    await browser.close();
})();