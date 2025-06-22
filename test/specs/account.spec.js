const account = require("../pages/account");
const password = "secret_sauce";
const username = "locked_out_user";

describe("Automation Testing Question No 1", () => {
    it("Verifying error message for locked out user", async () => {
        await account.login(username, password);
        await expect(account.flashAlert).toBeDisplayed();
        await expect(account.flashAlert).toHaveText(expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'));
    });
});
