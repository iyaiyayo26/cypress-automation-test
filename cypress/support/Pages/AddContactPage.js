const inputFirstName = 'input#firstName';
const inputLastName = 'input#lastName';
const inputDoB = 'input#birthdate';
const inputEmail = 'input#email';
const inputPhoneNumber = 'input#phone';
const inputAddress = 'input#street1';
const inputCity = 'input#city';
const inputStateProvince = 'input#stateProvince';
const inputPostalCode = 'input#postalCode';
const inputCountry = 'input#country';
const errorMessage = 'span#error';

const ADD_CONTACT_ERROR_MESSAGE = 'Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.'

class AddContactPage{
    static inputName(firstName, lastName){
        cy.get(inputFirstName).type(firstName);
        cy.get(inputLastName).type(lastName);
    }

    static inputContactAndDoB(dob, email, phoneNumber){
        cy.get(inputDoB).type(dob);
        cy.get(inputEmail).type(email);
        cy.get(inputPhoneNumber).type(phoneNumber);
    }

    static inputAddress(address, city, province, postalCode, country){
        cy.get(inputAddress).type(address);
        cy.get(inputCity).type(city);
        cy.get(inputStateProvince).type(province);
        cy.get(inputPostalCode).type(postalCode);
        cy.get(inputCountry).type(country);
    }

    static errorMessage(){
        cy.get(errorMessage)
            .should('have.text', ADD_CONTACT_ERROR_MESSAGE)
            .should('be.visible');
    }

    
}

export default AddContactPage;