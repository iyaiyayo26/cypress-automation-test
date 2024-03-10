const contactTable = 'tr.contactTableBodyRow';

const CONTACT_LIST_PAGE_TITLE = 'Contact List';
const CONTACT_LIST_PAGE_DESC = 'Click on any contact to view the Contact Details';

class ContactListPage{
    static clickBtn(btn){
        cy.contains(btn).click();
    }

    static verifyAddAccountData(){
        cy.get(contactTable)
            .find('td')
            .eq(1)
            .should('contain', 'Budi Doremi')
    }

    static navigateToContactListPage(){
        cy.contains('h1', 'Contact List')
            .should('have.text', CONTACT_LIST_PAGE_TITLE)
            .should('be.visible');
        cy.contains('p', CONTACT_LIST_PAGE_DESC)
            .should('have.text', CONTACT_LIST_PAGE_DESC)
            .should('be.visible');
    }
}

export default ContactListPage;