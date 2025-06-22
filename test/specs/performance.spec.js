const standard_user = require("../pages/standard_user");
const account = require("../pages/account");
const performance = require("../pages/performance");
const { expect } = require("chai");

const password = "secret_sauce";
const username = "performance_glitch_user";

const first_name = "Nusrat";
const last_name = "Jahan";
const postal = "1216";

describe("Automation Testing Question No 3", () => {
    it("Verifying using performance_glitch user", async () => {
        await account.login(username, password);
        console.log("Login Successfully");

        await standard_user.clickMenu();
        console.log("Clicked Menu");

        await standard_user.resetApp();
        console.log("App Reset Done Successfully!");
        
        await standard_user.closeMenu();
        await performance.clickZtoA();
        console.log("Clicked Z to A");

        const product_name = await performance.productName();
        console.log("Product Name:", product_name);

        const product_price = await performance.product_price();
        console.log("Product Price Fetched:", product_price);

        await performance.clickProduct();
        console.log("Added the Item to the Cart");

        await standard_user.view_cart();
        await standard_user.checkoutBtn();
        await browser.pause(3000);

        await standard_user.checkout_address(first_name, last_name, postal);
        console.log("Checkout Filled Information Successfully!");
        await browser.pause(2000);

        
        const nameCheck = await performance.productName();
        if (product_name === nameCheck) {
            console.log("Product Name Matched!");
        } else {
            console.warn(`Product Name Mismatch! Expected: "${product_name}", Found: "${nameCheck}"`);
        }

        const priceCheck = await performance.product_price();
        if (product_price === priceCheck) {
            console.log("Product Price Matched!");
        } else {
            console.log(`Product Price Mismatch! Expected: ${product_price}, Found: ${priceCheck}`);
        }

        const totalPrice = await standard_user.item_total();
        const tax = await standard_user.item_tax();
        if (totalPrice === product_price + tax) {
            console.log("Total Price Matched Successfully!");
        } else {
            console.log(`Total Price Mismatch! Total: ${totalPrice}, Expected: ${product_price + tax}`);
        }

        await browser.pause(4000);
        await standard_user.clickFinishBtn();

        const heading = await standard_user.thank_you();
        expect(heading).to.equal("Thank you for your order!");
        console.log("🎉 Order completed successfully!");


        try {
            
            await standard_user.clickBacktoHome();

            await standard_user.clickMenu();

            
            await standard_user.resetApp();
            console.log("Reset the app successfully!");

            await browser.pause(1000);

            await standard_user.logOut();
            console.log("Logout Successfully");
        } catch (err) {
            console.error("Error during final steps:", err.message);
        }

    });
});
