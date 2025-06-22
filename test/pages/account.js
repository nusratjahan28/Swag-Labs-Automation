const accountLocator = require("../locators/accountLocator");

class Account {
    async enter_username(username) {
        await accountLocator.username.setValue(username);
    }

    async enter_password(password) {
        await accountLocator.password.setValue(password);
    }

    async clickLogin() {
        await accountLocator.loginBtn.click();
    }
    get flashAlert() {
        return accountLocator.errorMessage;
    }

    async login(username, password) {
        await this.enter_username(username);
        await browser.pause(4000);
        await this.enter_password(password);
        await browser.pause(4000);
        await this.clickLogin();
        await browser.pause(4000);
    }
}

module.exports = new Account();
