export class Assignment3{
    url = 'http://localhost:3000/signin'

    elements = {
        // Sign In page elements
        getUsername: () => cy.get('#username'),
        getPassword: () => cy.get('#password'),
        getSignInBtn: () => cy.get('.MuiButton-label'),

        // Real World App side menu element
        getUserConfirmation: () => cy.get('h6[data-test="sidenav-username"]'),
        getLogoutBtn: () => cy.get('span.MuiTypography-root'),

        // Create Bank Account elements
        getBankAccountsBtn: () => cy.get('span.MuiTypography-root'),
        getCreateBankAccountBtn: () => cy.get('.MuiButton-label'),
        getBankNameTxt: () => cy.get('#bankaccount-bankName-input'),
        getRoutingNumberTxt: () => cy.get('#bankaccount-routingNumber-input'),
        getAccountNumberTxt: () => cy.get('#bankaccount-accountNumber-input'),
        getSaveBtn: () => cy.get('button[data-test="bankaccount-submit"]'),
        getBankAccountCreated: () => cy.get('li.MuiListItem-root'),
    }
    
    signIn(username, password){
        // Fill up sign in form
        this.elements.getUsername().clear().type(username);
        this.elements.getPassword().clear().type(password);
        this.elements.getSignInBtn().click();  
    }

    logOut(){
        // Click Logout button from the side menu
        this.elements.getLogoutBtn().contains('Logout').click();
    }

    createBankAccount(bankName, routingNumber, accountNumber){
        //Access Bank Accounts section from the side menu
        this.elements.getBankAccountsBtn().contains('Bank Accounts').click();

        //Click on Create button
        this.elements.getCreateBankAccountBtn().contains('Create').click();

        //Fill the inputs with the information of the variables and then click on Save
        this.elements.getBankNameTxt().type(bankName);
        this.elements.getRoutingNumberTxt().type(routingNumber);
        this.elements.getAccountNumberTxt().type(accountNumber);
        this.elements.getSaveBtn().contains('Save').click();
    }

    // //Verify thet the Bank Name has been added to the list
    // cy.get('li.MuiListItem-root').invoke('text').should('includes', BANK_NAME);

}

export const NewAssignment3 = new Assignment3();
