import { HomePage } from './home-page.po';
import { CommonPageHelper } from '../common/common-page.helper';
import { HomePageConstant } from './home-page.constants';
import { browser} from 'protractor';
import {LoginPage} from '../login/login.po';

export class HomePageHelper extends CommonPageHelper {

    /**
     * open New Message Box for sending the mail
     */
    public async launchNewMessageBox() {
       await super.click(HomePage.composeButton);
    }

    /**
     * Enter the recipient inside the To field.
     */
    public async sendTo() {
        await super.sendKeys(HomePage.newMessage.toSend, HomePageConstant.toMail);
    }

    /**
     * Enter the subject for the mail.
     */
    public async mailSubject() {
        await super.sendKeys(HomePage.newMessage.mailSubject, HomePageConstant.mailSubject);
    }

    /**
     * Attach the files for the mail.
     */
    public async attachFile() {
        await super.sendKeys(HomePage.newMessage.mailattachment, HomePageConstant.filePath);
    }

    /**
     * Send the mail to the recipient with Subject and Atatchment
     */
    public async sendMail() {
        await this.launchNewMessageBox();
        await this.mailSubject();
        await this.attachFile();
        // wait till the attachment gets uploaded
        browser.sleep(3000);
        await super.click(HomePage.newMessage.sendButton);
        await this.waitTillMailIsSent();
    }

    /**
     * Wait till the Confirmation message appears for Mail
     */
    public async waitTillMailIsSent() {
        await super.waitTillElementIsVisisble(HomePage.serverMessage);
    }

    /**
     * Open the received Mail
     */
    public async selectTheMail() {
        await super.click(HomePage.getincomingMail);
    }

    /**
     * Assert the incoming mail
     */
    public async assertIncomingMail() {
       await super.waitTillElementIsVisisble(HomePage.getSubjectText);
       // Assertion for Received Subject
       await expect(await HomePage.getSubjectText.getText()).toBe(HomePageConstant.mailSubject);
        // Assertion for Received Body
       await expect( await HomePage.getMailBody.getText()).toBe(HomePageConstant.mailBody);
        // Assertion for Received Attachment
       await expect( await HomePage.getAttachmentTitle.getText()).toBe(HomePageConstant.attachmentTitle);
    }

    /**
     * Logout from Gmail
     */
     public async logOut() {
         await super.click(HomePage.signOut.profile);
         await super.click(HomePage.signOut.logOut);
         await super.waitTillElementIsVisisble(LoginPage.username);
     }
}
