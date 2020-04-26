import {By, element, $} from 'protractor';
import {HomePageConstant} from './home-page.constants';

export class HomePage {

    static get composeButton() {
        return element(By.xpath('//*[@role="button" and (.)="COMPOSE"]'));
    }

    static get newMessage() {
        return {
            toSend: element(By.name('to')),
            mailSubject: element(By.name('subjectbox')),
            mailattachment: element(By.id(':ad')),
            sendButton: element(By.xpath('//*[@role="button" and text()="Send"]')),
            mailBody: $('div[aria-label="Message Body"]')
        };
    }

    static get signOut() {
        return{
            profile: $('.gb_db.gbii'),
            logOut: element(By.linkText('Sign out'))
        };
    }

    static get attachmentTitle() {
        return element(By.cssContainingText('.vJ', HomePageConstant.attachmentTitle));
    }

    static get serverMessage() {
        return element(By.cssContainingText('div', HomePageConstant.sentConfirm));
    }

    static get getincomingMail() {
        return element(By.cssContainingText('b', HomePageConstant.mailSubject));
    }

    static get getSubjectText() {
        return element(By.cssContainingText('h2', HomePageConstant.mailSubject));
    }

    static get getMailBody() {
        return element(By.cssContainingText('div', HomePageConstant.mailBody));
    }

    static get getAttachmentTitle() {
        return element(By.cssContainingText('span', HomePageConstant.attachmentTitle));
    }
}
