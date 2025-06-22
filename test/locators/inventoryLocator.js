class InventoryLocator{
    get open_menu(){
        return $("//button[@id='react-burger-menu-btn']");
    }
    get reset_app(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get log_out(){
        return $("//a[@id='logout_sidebar_link']");
    }
    get close_menu(){
        return $("//button[@id='react-burger-cross-btn']");
    }
    get product_a(){
        return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    }
    get product_a_name(){
        return $("//div[contains(text(),'Sauce Labs Backpack')]");
    }
    get product_b(){
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
    }
    get product_b_name(){
        return $("//div[contains(text(),'Sauce Labs Bike Light')]");
    }

    get product_c(){
        return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    }
    get product_c_name(){
        return $("//div[contains(text(),'Sauce Labs Bolt T-Shirt')]")
    }
    get itemPrices() {
        return $$("(//div[@data-test='inventory-item-price'])[position() <= 3]");
    }

    get cart(){
        return $("//a[@class='shopping_cart_link']");
    }
    get z_to_a(){
        return $("//option[contains(text(),'Z to A')]");
    }
    get product_d(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }
    get product_d_name(){
        return $("//div[contains(text(),'T-Shirt (Red)')]");
    }
    get product_d_price(){
        return $("(//div[@data-test='inventory-item-price'])[position() <= 1]")
    }
}

module.exports = new InventoryLocator();