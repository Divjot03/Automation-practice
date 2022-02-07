/// <reference types="cypress" />
describe('Test the Automation API practice', () => {
    
    
    it('Get the list of products', () => {
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((resp)=>{

        expect(resp.status).equal(200)
        expect(resp.body.product[0]).has.property('price',599.99)
        expect(resp.body.product).has.length(1)
        expect(resp.body.product[0]).has.property('product','motorbike')

    })
    })

    it('Get the list of Users', () => {
        cy.request('https://flask-rest-api-demo.herokuapp.com/users').then((resp)=>{

        expect(resp.status).equal(200)
        expect(resp.body.users[2]).has.property('username','test_3')
        expect(resp.body.users).has.length(5)
        expect(resp.body.users[4]).has.property('password','qwerty')
        expect(resp.body.users[2]).has.not.property('price')

    })
    })

    it('Get the list of Users', () => {
        cy.request('https://reqres.in/api/users?page=2').then((resp)=>{

        expect(resp.status).equal(200)
        expect(resp.body).has.property('total',12)
        expect(resp.body.data[0]).has.property('first_name','Michael')
        expect(resp.body.data[1]).has.property('first_name','Lindsay')
        expect(resp.body.data).has.length(6)
    })
    })

})