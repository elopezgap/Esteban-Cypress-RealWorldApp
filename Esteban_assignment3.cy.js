/// <reference types="cypress" />
import { NewAssignment3 } from "../../../page-objects/pages/assignment3";

describe('Real World app tests', () => {
    //Variables used for the test
    let username = 'Katharina_Bernier';
    let password = 's3cret';
    let userConfirmation = '@' + username;
    let uuid = '1' + Math.random().toString();
    let bankName = 'Esteban Test Bank Account' + uuid;
    let routingNumber = '123456789';
    let accountNumber = '012345678912';
    

    beforeEach(()=> {
        // Log in process
        cy.visit('http://localhost:3000/signin');
        NewAssignment3.signIn(username, password);

        // Check that the user has logged in successfully
        NewAssignment3.elements.getUserConfirmation().should('have.text', userConfirmation);
    })

    afterEach(()=> {
        // Logout
        NewAssignment3.logOut();
    })

    it('the creating of a bank account with page object model', () =>{
        // Create Bank Account
        NewAssignment3.createBankAccount(bankName, routingNumber, accountNumber);

        // Make sure that the account created has been added correctly
        NewAssignment3.elements.getBankAccountCreated().invoke('text').should('includes', bankName);
    })

})
