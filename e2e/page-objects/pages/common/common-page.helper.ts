import {browser, ElementFinder, protractor} from 'protractor';

export class CommonPageHelper {
    private readonly EC = protractor.ExpectedConditions;

    protected async goTo() {
        browser.waitForAngularEnabled(false);
        return await browser.get(browser.baseUrl);
    }

    static get account1UserName(): string {
        return browser.params.user1.username;
    }

    static get account1Password(): string {
        return browser.params.user1.password;
    }

    static get account2UserName(): string {
        return browser.params.user2.username;
    }

    static get account2Password(): string {
        return browser.params.user2.password;
    }

    public async waitTillElementIsVisisble(item: ElementFinder) {
        browser.wait(this.EC.visibilityOf(item), 15000);
    }

    public async click(item: ElementFinder) {
       browser.wait(this.EC.elementToBeClickable(item), 10000);
       return item.click();
    }

    public async sendKeys(item: ElementFinder, value: string) {
        browser.wait(this.EC.elementToBeClickable(item), 8000);
        item.clear();
        item.sendKeys(value);
    }
}
