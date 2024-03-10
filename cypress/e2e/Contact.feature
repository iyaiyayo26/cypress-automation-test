Feature: Open Contact List Website

# login feature
@login 
Scenario: Success login 
    Given user go to contact list web 
    When user input 'testingauto1@gmail.com' in email form section on contact list home page
     And user input 'testingauto1' in password input form section on contact list home page 
     And user click 'Submit' button
    Then user navigate to contact list page 

Scenario: Verify error message when user input the wrong email or password
    Given user go to contact list web 
    When user input 'testingauto1@gmail.com' in email form section on contact list home page
     And user input 'abcde123' in password input form section on contact list home page 
     And user click 'Submit' button
    Then user see error message on contact list home page

# SIGN UP feature
@signup
Scenario: Success sign up
    Given user go to contact list web 
    When user click 'Sign up' button on contact list home page 
    Then user navigate to sign up page
    When user input first name, last name, email, and password on sign up page
     And user click 'Submit' button
    Then user navigate to contact list page

Scenario: verify error message when user didn't fill the sign up form
    Given user go to contact list web 
    When user click 'Sign up' button on contact list home page 
    Then user navigate to sign up page
    When user click 'Submit' button
    Then user see error message on sign up page

Scenario: success navigate to contact list home page when user click Cancel button
    Given user go to contact list web 
    When user click 'Sign up' button on contact list home page 
    Then user navigate to sign up page
    When user click 'Cancel' button
    Then user see contact list home page

# # ADD CONTACT
Scenario: Success input all data form
    Given user go to contact list web 
    When user input 'testingauto1@gmail.com' in email form section on contact list home page
     And user input 'testingauto1' in password input form section on contact list home page 
     And user click 'Submit' button
    Then user navigate to contact list page
    When user click 'Add a New Contact' button on contact list page
     And input 'Budi' in first name, and 'Doremi' in last name form section on add contact page
     And input '2001-01-26' in DoB, 'budi@gmail.com' in email, and '081234567890' in phone form section on add contact page
     And input 'Jl. Kenangan, no. 123' in street address 1 form section, 'Bogor' in City form section, 'Jawa Barat' in state or province form section, '16810' in postal code form section, 'Indonesia' in country form section on add contact page
     And user click 'Submit' button
    Then user can see the new contact success added to contact list

Scenario: verify error message when user didn't input any data form and click submit button
    Given user go to contact list web 
    When user input 'testingauto1@gmail.com' in email form section on contact list home page
     And user input 'testingauto1' in password input form section on contact list home page 
     And user click 'Submit' button
    Then user navigate to contact list page
    When user click 'Add a New Contact' button on contact list page
     And user click 'Submit' button
    Then user see error message on add contact page

Scenario: user navigate to contact list page after click cancel button
    Given user go to contact list web 
    When user input 'testingauto1@gmail.com' in email form section on contact list home page
     And user input 'testingauto1' in password input form section on contact list home page 
     And user click 'Submit' button
    Then user navigate to contact list page
    When user click 'Add a New Contact' button on contact list page
     And user click 'Cancel' button
    Then user navigate to contact list page