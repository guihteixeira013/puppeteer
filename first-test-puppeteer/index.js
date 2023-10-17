const puppeteer = require('puppeteer');     //importando biblioteca

async function robot() {
    const browser = await puppeteer.launch( {headless: false} );         //abrindo browser
    const page = await browser.newPage();                                //abrindo nova pagina
    
    await page.goto('https://google.com');                               //indo para google.com
    await page.screenshot( {path: 'print.png'} );                        //tirando print da pagina
    await browser.close();                                               //fechando navegador
}

robot();