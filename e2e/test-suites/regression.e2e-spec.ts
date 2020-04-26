import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {HomePageHelper} from '../page-objects/pages/HomePage/home-page.helper';

describe('Gmail suite', () => {
    let loginPageHelper: LoginPageHelper;
    let homePageHelper: HomePageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
        homePageHelper = new HomePageHelper();
        loginPageHelper.goToPage();
    });

    afterEach(() => {
        homePageHelper.logOut();
    });

    fit('Send email from the First Account to the Second Account', async () => {
        loginPageHelper.loginWithFirstAccount();
        homePageHelper.launchNewMessageBox();
        homePageHelper.sendMail();
        homePageHelper.waitTillMailIsSent();
    });

    it('Assert the email sent from the First Account', async () => {
        loginPageHelper.loginWithSecondAccount();
        homePageHelper.selectTheMail();
        homePageHelper.assertIncomingMail();
    });

});
