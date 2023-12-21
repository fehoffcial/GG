const  puppeteer = require("puppeteer");
const fs = require("fs");
function login(){
  (async () => {
    try{ 
      console.log(`Inicializando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
      const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
      const page = await browser.newPage();
      console.log(`Processando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
      await page.goto('https://www.lojaboschferramentas.com.br', {waitUntil: 'load', timeout: 0});
      await new Promise(r => setTimeout(r, 2000));
      let GetItem = await page.$x(`/html/body/div[2]/div/div[1]/div/div[2]/div/div[3]/div/div/section/div/div/div/div[3]/div/div/div[1]/div/div/button/div/span/div[1]/div`)
      await GetItem[0].click();
      await new Promise(r => setTimeout(r, 2000));
      GetItem = await page.$x(`/html/body/div[10]/div/div/div/div/div/div[2]/div/div/div/div[1]/ul/li[2]/div/button`);
      await GetItem[0].click();
      await new Promise(r => setTimeout(r, 2000));
      GetItem = await page.$x(`/html/body/div[10]/div/div/div/div/div/div[2]/div/div/div/div/form/div[1]/label/div/input`);
      await GetItem[0].type("MRALISSON@proton.me");
      await new Promise(r => setTimeout(r, 2000));
      GetItem = await page.$x(`/html/body/div[10]/div/div/div/div/div/div[2]/div/div/div/div/form/div[2]/div/label/div/input`);
      await GetItem[0].type("LoginAcess0");
      await new Promise(r => setTimeout(r, 2000));
      GetItem = await page.$x(`/html/body/div[10]/div/div/div/div/div/div[2]/div/div/div/div/form/div[4]/div[2]/button`);
      await GetItem[0].click();
      await new Promise(r => setTimeout(r, 2000));
      await page.close();
      Pedidos();
      console.log(`Finalizado com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
    }catch(error){
      console.log(`Erro no PDF ❌ [ SPX ] [ ID: ] [ ERRO Technical Analysis [ SPX ] ]`);
    }finally{
      console.log(`[ REQUEST ✅  ] [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
    }
  })();
};
function Pedidos(card,moth,year,cvv){
    (async () => {
      try{ 
        console.log(`Inicializando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
        const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
        const page = await browser.newPage();
        console.log(`Processando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
        await page.goto('https://www.lojaboschferramentas.com.br/broca-para-madeira-bosch-expert-self-cut-speed/p', {waitUntil: 'load', timeout: 0});
        await new Promise(r => setTimeout(r, 2000));
        try{
            let GetItem = await page.$x(`/html/body/div[2]/div/div[1]/div/div/div/div[3]/div/div[3]/div/section/div/div[2]/div/div[9]/div/div/div/div/div/div[2]/div[3]/button`)
            await GetItem[0].click();
        }catch{
            GetItem = await page.$x(`/html/body/div[2]/div/div[1]/div/div/div/div[3]/div/div[3]/div/section/div/div[2]/div/div[9]/div/div/div/div/div/div[2]/div[3]/button/div`)
            await GetItem[0].click();
        }
        await new Promise(r => setTimeout(r, 2000)); 
        GetItem = await page.$x(`//*[@id="proceed-to-checkout"]`);
        await GetItem[0].click();
        await page.waitForNavigation({ waitUntil: "load" });
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#shipping-calculate-link');
        GetItem = await page.$x(`//*[@id="shipping-calculate-link"]`)
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#ship-postalCode');
        GetItem = await page.$x(`//*[@id="ship-postalCode"]`);
        await GetItem[0].click();
        $cep = ["1","3","4","5","4","0","5","0"]
        for (let index = 0; index < 8; index++) {
            await GetItem[0].type($cep[index],);
        }
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#cart-to-orderform');
        GetItem = await page.$x(`//*[@id="cart-to-orderform"]`);
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#client-email');
        GetItem = await page.$x(`//*[@id="client-email"]`);
        await GetItem[0].type("MRALISSON@proton.me");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#client-first-name');
        GetItem = await page.$x(`//*[@id="client-first-name"]`);
        await GetItem[0].type("Jeninho");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#client-last-name');
        GetItem = await page.$x(`//*[@id="client-last-name"]`);
        await GetItem[0].type("Lima");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#client-document');
        GetItem = await page.$x(`//*[@id="client-document"]`);
        await GetItem[0].type("84390344749");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#client-phone');
        GetItem = await page.$x(`//*[@id="client-phone"]`);
        await GetItem[0].type("11998672824");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#opt-in-terms');
        GetItem = await page.$x(`//*[@id="opt-in-terms"]`);
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#opt-in-newsletter');
        GetItem = await page.$x(`//*[@id="opt-in-newsletter"]`);
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#go-to-shipping');
        GetItem = await page.$x(`//*[@id="go-to-shipping"]`);
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#ship-number');
        GetItem = await page.$x(`//*[@id="ship-number"]`);
        await GetItem[0].type("304");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#ship-complement');
        GetItem = await page.$x(`//*[@id="ship-complement"]`);
        await GetItem[0].type("Casa");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#ship-receiverName');
        GetItem = await page.$x(`//*[@id="ship-receiverName"]`);
        await GetItem[0].type("CASA DAS MOEDAS");
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#btn-go-to-payment');
        GetItem = await page.$x(`//*[@id="btn-go-to-payment"]`);
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#payment-group-creditCardPaymentGroup');
        GetItem = await page.$x(`//*[@id="payment-group-creditCardPaymentGroup"]`);
        await GetItem[0].click();
        /*** ! NEW CARDS */
        console.log("FOI");
        await new Promise(r => setTimeout(r, 10000));
        console.log(`Finalizado com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
      }catch(error){
        console.log(`Erro no PDF ❌ [ SPX ] [ ID: ] [ ERRO Technical Analysis [ SPX ] ]`);
      }finally{
        console.log(`[ REQUEST ✅  ] [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
      }
    })();
  };
Pedidos("4984319049087600","03","2026","000");