/// <reference types="cypress" />

describe('Real World app tests', () => {

    before(()=> {
        cy.visit('http://localhost:3000/signin')
        cy.get('#username').clear().type('Katharina_Bernier')
        cy.get('#password').clear().type('s3cret')
        cy.get('.MuiButton-label').click()
        //cy.wait(5000)
        cy.get('h6[data-test="sidenav-username"]').should('have.text', '@Katharina_Bernier')
    })

    it('Automation of the Create a Bank Account flow', () => {
        var BANK_NAME = 'Esteban Test Bank Account'
        var ROUTING_NUMBER = '111111111'
        var ACCOUNT_NUMBER = '012345678912'
        
        cy.get('span.MuiTypography-root').contains('Bank Accounts').click()
        cy.get('a.MuiButtonBase-root').contains('Create').click()
        //cy.get('MuiTypography-root2').should('have.text', 'Create Bank Account')
        cy.get('#bankaccount-bankName-input').clear().type(BANK_NAME)
        cy.get('#bankaccount-routingNumber-input').clear().type(ROUTING_NUMBER)
        cy.get('#bankaccount-accountNumber-input').clear().type(ACCOUNT_NUMBER)
        cy.get('button[data-test="bankaccount-submit"]').contains('Save').click()
        cy.get('li.MuiListItem-root').invoke('text').should('includes', 'Esteban Test Bank Account')
    
    })

    after(()=> {
        cy.get('span.MuiTypography-root').contains('Logout').click()
    })

})