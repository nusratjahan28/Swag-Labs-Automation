class CartLocators {
    get checkoutBtn() {
        return $("//button[@id='checkout']");
    }

    get first_name() {
        return $("//input[@id='first-name']");
    }

    get last_name() {
        return $("//input[@id='last-name']");
    }

    get postal() {
        return $("//input[@id='postal-code']");
    }

    get checkout_continueBtn() {
        return $("//input[@id='continue']");
    }

    get items_subtotal(){
        return $("//div[@data-test='subtotal-label']");
    }

    get tax(){
        return $("//div[@data-test='tax-label']");
    }

    get items_total(){
        return $("//div[@data-test='total-label']");
    }

    get finish_Btn(){
        return $("//button[@id='finish']");
    }
    async thank_you() {
        const element = await $("//h2[@data-test='complete-header']");
        const text = await element.getText();
        return text;
    }

    get back_to_home(){
        return $("//button[@id='back-to-products']");
    }

    
}

module.exports = new CartLocators();
