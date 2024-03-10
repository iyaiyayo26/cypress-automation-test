const SIGN_UP_PAGE_TITLE = 'Add User';
const SIGN_UP_PAGE_DESC = 'Sign up to begin adding your contacts!';
const SIGN_UP_ERROR_MESSAGE = 'User validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required., email: Email is invalid, password: Path `password` is required.'

const inputFirstName = 'input#firstName';
const inputLastName = 'input#lastName';
const inputEmail = 'input#email';
const inputPassword = 'input#password';
const errorMessage = 'span#error';

class SignUpPage{
    static navigateSignUpPage(){
        cy.contains('h1', SIGN_UP_PAGE_TITLE)
            .should('have.text', SIGN_UP_PAGE_TITLE)
            .should('be.visible');
        cy.contains('p', SIGN_UP_PAGE_DESC)
            .should('have.text', SIGN_UP_PAGE_DESC)
            .should('be.visible');
    }

    static inputAllData(){
        const randomStr = Math.random().toString(36).substr(2, 10);

        cy.get(inputFirstName).type('Testing');
        cy.get(inputLastName).type('Account');
        cy.get(inputEmail).type(`${randomStr}@gmail.com`);
        cy.get(inputPassword).type('password');
    }

    static errorMessage(){
        cy.get(errorMessage)
        .should('have.text', SIGN_UP_ERROR_MESSAGE)
        .should('be.visible')
    }
}

export default SignUpPage;