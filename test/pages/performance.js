const inventoryLocator = require("../locators/inventoryLocator");
const cartLocator = require("../locators/cartLocators");
class Performace{
        
        async clickZtoA(){
        await browser.pause(2000);
        await inventoryLocator.z_to_a.click();
    }
        async clickProduct(){
            await browser.pause(2000);
            await inventoryLocator.product_d.click();
        }

async productName() {
    const el = inventoryLocator.product_d_name;
    await el.waitForExist({ timeout: 15000 }); 
    return await el.getText();
}

    



async product_price() {
    const el = inventoryLocator.product_d_price;
    await el.waitForExist({ timeout: 15000 }); 
    let s1 = await el.getText();
    s1 = s1.replace("$", "");
    return Number(s1);
}



}

module.exports=new Performace();
