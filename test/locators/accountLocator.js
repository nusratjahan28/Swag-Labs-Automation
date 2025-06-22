class AccountLocator{
    get username(){
        return $("//input[@id='user-name']");
    }
    get password(){
        return $("//input[@id='password']");
    }

    get loginBtn(){
        return $("//input[@id='login-button']");
    }
    get errorMessage(){
        return $("//h3[contains(text(),'Epic sadface')]");
    }
}
module.exports = new AccountLocator();