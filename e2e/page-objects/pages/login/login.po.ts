import {By, element} from 'protractor';

export class LoginPage {
    static get password() {
        return element(By.name('password'));
    }

    static get username() {
        return element(By.id('identifierId'));
    }

    static get passwordNextButton() {
        return element(By.css('#passwordNext'));
    }

    static get nextButton() {
        return element(By.id('identifierNext'));
    }

}
