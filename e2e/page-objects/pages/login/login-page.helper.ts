import {CommonPageHelper} from '../common/common-page.helper';
import {LoginPage} from './login.po';
import {browser} from 'protractor';

export class LoginPageHelper extends CommonPageHelper {
    static async waitForSometime() {
        browser.sleep(8000);
    }

    /* Go to Gmail login Page */
    public async goToPage() {
        return super.goTo();
    }

    /**
     *  Enter values inside the Username field
     * @param {string} username
     */
    public async setUsername(username: string) {
        await super.sendKeys(LoginPage.username, username);
    }

    /**
     *  Enter values inside the Password field
     * @param {string} password
     */
    public async setPassword(password: string) {
        await super.sendKeys(LoginPage.password, password);
    }

    /**
     * Logging in to gmail with Account 1
     */
    public async loginWithFirstAccount() {
        const firstAccountUsername = CommonPageHelper.account1UserName;
        await this.setUsername(firstAccountUsername);

        // wait till the next page is getting loaded
        browser.sleep(8000);
        await super.click(LoginPage.nextButton);
        // wait till the next page is getting loaded
        browser.sleep(8000);

        const firstAccountPassword = CommonPageHelper.account1Password;
        await this.setPassword(firstAccountPassword);

        // wait till the next page is getting loaded
        browser.sleep(8000);
        await super.click(LoginPage.passwordNextButton);
    }

    /**
     * Logging in to gmail with Account 2
     */
    public async loginWithSecondAccount() {
        const secondAccountUsername = CommonPageHelper.account1UserName;
        await this.setUsername(secondAccountUsername);

        await super.click(LoginPage.nextButton);

        const secondAccountPassword = CommonPageHelper.account1Password;
        await this.setPassword(secondAccountPassword);

        await super.click(LoginPage.passwordNextButton);
    }

}
