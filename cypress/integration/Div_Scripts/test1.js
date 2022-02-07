/// <reference types="cypress" />
describe('Test the Automation practice', () => {
    
    before(() => {
        cy.visit('http://automationpractice.com/index.php?',{failOnStatusCode: false})
    })

    it('Login', () => {
        cy.login('divjot@founderandlightning.com','Test@123')
    })

    it('Verify properly logged in', () => {
        cy.url().should('include','controller=my-account')
        cy.get('.header_user_info').find('.account').should('be.visible')
        cy.get('.myaccount-link-list li').should('have.length', 5)
        cy.contains(' Home')
    })

    it('Test drop-down', () => {
        cy.get('#search_query_top').type('Dress')
        cy.get('.ac_results').find('li').contains('T-shirts').click()
    })

    it('Test Cart page', () => {
        cy.get('a[title="View my shopping cart"]').click()
        cy.contains('Dresses').click({force: true})
        cy.get('.checkbox')
        .should('have.length',19)
        .check()
       
        cy.get('.checkbox').uncheck()
        cy.reload() 
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.contains('Proceed to checkout').click()
        cy.get('#cart_title').should('be.visible')
        .should('contain.text','Shopping-cart summary')
        
    })



})