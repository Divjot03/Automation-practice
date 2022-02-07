/// <reference types="cypress" />   
  describe('Test the Automation API ALIAS practice', () => {
    
    beforeEach(() => {
        cy.request('https://reqres.in/api/users?page=2').as('users')
    })

    it('validate header',() =>
    {
        cy.get('@users')
        .its('headers').its('content-type').should('include','application/json; charset=utf-8')

    })
    it('validate status',() =>
    {
        cy.get('@users')
        .its('status').should('equal',200)

    })


    it('validate total pages',() =>
    {
        cy.get('@users')
        .its('body').should('contain',{'total_pages':2})

    })

    it('validate user info',() =>
    {
        cy.get('@users')
        .its('body').then((resp)=>{

            expect(resp.data[0]).has.property('email','michael.lawson@reqres.in')
        })

    })
})