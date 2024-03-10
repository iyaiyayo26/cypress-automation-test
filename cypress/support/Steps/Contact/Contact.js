import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import OnboardingPage from '../../Pages/OnboardingPage';
import SignUpPage from '../../Pages/SignUpPage';
import ContactListPage from '../../Pages/ContactListPage';
import AddContactPage from '../../Pages/AddContactPage';

Given('user go to contact list web', () => {
    OnboardingPage.visitOnboardingPage();
})

// ============= when ====================

When('user input {string} in email form section on contact list home page', (email) => {
    OnboardingPage.inputEmailLogin(email);
})

When('user input {string} in password input form section on contact list home page', (password) => {
    OnboardingPage.inputPasswordLogin(password);
})

When('user click {string} button', (btn) => {
    OnboardingPage.clickBtn(btn);
})

When('user click {string} button on contact list home page', (btn) => {
    OnboardingPage.clickSignUpBtn(btn);
})

When('user input first name, last name, email, and password on sign up page', () => {
    SignUpPage.inputAllData();
})

When('user click {string} button on contact list page', (btn) => {
    ContactListPage.clickBtn(btn);
})

When('input {string} in first name, and {string} in last name form section on add contact page', (firstName, lastName) => {
    AddContactPage.inputName(firstName, lastName);
})

When('input {string} in DoB, {string} in email, and {string} in phone form section on add contact page', (dob, email, phoneNumber) => {
    AddContactPage.inputContactAndDoB(dob, email, phoneNumber);
})

When('input {string} in street address 1 form section, {string} in City form section, {string} in state or province form section, {string} in postal code form section, {string} in country form section on add contact page', (address, city, province, postalCode, country) => {
    AddContactPage.inputAddress(address, city, province, postalCode, country);
})

// =================== then =========================

Then('user see contact list home page', () => {
    OnboardingPage.navigateToOnboardingPage();
})

Then('user navigate to contact list page', () => {
    ContactListPage.navigateToContactListPage();
})

Then('user see error message on contact list home page', () => {
    OnboardingPage.getErrorMessage();
})

Then('user navigate to sign up page', () => {
    SignUpPage.navigateSignUpPage();
})

Then('user see error message on sign up page', () => {
    SignUpPage.errorMessage();
})

Then('user can see the new contact success added to contact list', () => {
    ContactListPage.verifyAddAccountData();
})

Then('user see error message on add contact page', () => {
    AddContactPage.errorMessage();
})