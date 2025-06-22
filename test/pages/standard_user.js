const inventoryLocator = require("../locators/inventoryLocator");
const cartLocator = require("../locators/cartLocators");

class Standard_user {
    async clickMenu() {
        await inventoryLocator.open_menu.click();
    }

    async resetApp() {
        await inventoryLocator.reset_app.click();
        await browser.pause(4000);
    }

    async closeMenu() {
        await inventoryLocator.close_menu.click();
    }

    async logOut(){
        await inventoryLocator.log_out.click();
    }

    async add_items() {
        await inventoryLocator.product_a.click();
        await browser.pause(2000);
        await inventoryLocator.product_b.click();
        await browser.pause(2000);
        await inventoryLocator.product_c.click();
    }

    async getTotalPrice() {
        let prices = 0;
        const priceElements = inventoryLocator.itemPrices; 
        for (let i = 0; i < 3; i++) {
            let s1 = priceElements[i];
            s1=await s1.getText();            
            s1 = s1.replace("$", "");             
            let num = Number(s1);                  
            prices +=num;                     
        }
        return prices;
    }

    async view_cart() {
        await inventoryLocator.cart.click();
        await browser.pause(4000);
    }

    async checkoutBtn() {
        await cartLocator.checkoutBtn.click();
    }

    async checkout_address(first_name, last_name, postal) {
        await cartLocator.first_name.setValue(first_name);
        await cartLocator.last_name.setValue(last_name);
        await cartLocator.postal.setValue(postal);
        await browser.pause(4000);
        await cartLocator.checkout_continueBtn.click();
    }

    async products(){
        let list =[];
        const product_a = await inventoryLocator.product_a_name.getText();
        const product_b = await inventoryLocator.product_b_name.getText();
        const product_c = await inventoryLocator.product_c_name.getText();
        list.push(product_a);
        list.push(product_b);
        list.push(product_c);
        return list;
    }
    async product_a_name(){
        const product_a = await inventoryLocator.product_a_name.getText();
        return product_a;
    }
    async product_b_name(){
        const product_b = await inventoryLocator.product_b_name.getText();
        return product_b;
    }
    async product_c_name(){
        const product_c = await inventoryLocator.product_c_name.getText();
        return product_c;
    }
    async item_subtotal() {
        const text = await cartLocator.items_subtotal.getText();
        return parseFloat(text.replace('Item total: $', ''));
    }

    async item_tax() {
        const text = await cartLocator.tax.getText();
        return parseFloat(text.replace('Tax: $', ''));
    }

    async item_total() {
        const subtotal = await this.item_subtotal();
        const tax = await this.item_tax();
        return parseFloat((subtotal + tax).toFixed(2));
    }

    async clickFinishBtn() {
        await cartLocator.finish_Btn.click();
    }

    get thank_you() {
            return cartLocator.thank_you;
        }
    async clickBacktoHome(){
        await cartLocator.back_to_home.click();
    }
}

module.exports = new Standard_user();
