const URL = 'https://thinking-tester-contact-list.herokuapp.com/';
const inputEmail = 'input#email';
const inputPassword = 'input#password';
const errorMessage = 'span#error';

const CONTACT_LIST_HOME_PAGE_TITLE = 'Contact List App';
const LOGIN_ERROR_MESSAGE = 'Incorrect username or password';

class OnboardingPage{
    static visitOnboardingPage(){
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/'); 
    }

    static navigateToOnboardingPage(){
        cy.contains('h1', 'Contact List App')
            .should('have.text', CONTACT_LIST_HOME_PAGE_TITLE)
            .should('be.visible');
    }

    static inputEmailLogin(email){
        cy.get(inputEmail).type(email);
    }

    static inputPasswordLogin(password){
        cy.get(inputPassword).type(password);
    }

    static clickBtn(btn){
        cy.contains(btn).click()
    }

    static getErrorMessage(){
        cy.get(errorMessage).should('have.text', LOGIN_ERROR_MESSAGE).should('be.visible');
    }

    static clickSignUpBtn(btn){
        cy.contains(btn).click();
    }
}

export default OnboardingPage;