const standard_user = require("../pages/standard_user");
const account = require("../pages/account");
const { expect } = require("chai");
const password = "secret_sauce";
const username = "standard_user";

const first_name = "Nusrat";
const last_name = "Jahan";
const postal = "1216";

describe("Automation Testing Question No 2", () => {
    it("Verifying StandardUser", async () => {
        await account.login(username, password);
        console.log("Log In Successful");
        await browser.pause(2000);

        await standard_user.clickMenu();
        await standard_user.resetApp();
        await standard_user.closeMenu();
        await browser.pause(3000);

        await standard_user.add_items();
        console.log("Items Added Successfully!");
        await browser.pause(3000);

        await standard_user.view_cart();
        await standard_user.checkoutBtn();
        await browser.pause(3000);

        await standard_user.checkout_address(first_name, last_name, postal);
        await browser.pause(2000);
        console.log("Checkout Filled Information Successfully!");

        let productlist = await standard_user.products();
        let product_count = 0;


        const productAName = await standard_user.product_a_name();
        const productBName = await standard_user.product_b_name();
        const productCName = await standard_user.product_c_name();

        for(let i = 0; i < productlist.length; i++){
            let currentProduct = productlist[i];
            if(currentProduct == productAName){
                product_count++;
            }
            else if(currentProduct == productBName){
                product_count++;
            }
            else if(currentProduct == productCName){
                product_count++;
            }
            else{
                throw new Error(`Product not matched: ${currentProduct}. Expected: ${productAName}, ${productBName}, or ${productCName}`);
            }
        }

        console.log(`All ${product_count} products matched successfully`);


        if(await standard_user.getTotalPrice()==await standard_user.item_subtotal()){
            console.log("Product Prices Matched!");
        }

        if(await standard_user.getTotalPrice()+ await standard_user.item_tax() == await standard_user.item_total()){
            console.log("Total price Matched Successfully!");
        }
        await standard_user.clickFinishBtn();
        const heading = await standard_user.thank_you();
        expect(heading).to.equal("Thank you for your order!");
        console.log("Order completed successfully");
        await browser.pause(2000);
        await standard_user.clickBacktoHome();
        await standard_user.clickMenu();
        await browser.pause(2000);
        await standard_user.resetApp();
        console.log("Reset the app successfully!")
        await browser.pause(1000);
        await standard_user.logOut();
        console.log("Logout Successfully");
    });
});