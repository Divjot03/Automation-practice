/// <reference types="cypress" />

describe('Check the cities', ()=>{

    it('Get the list of cities',() =>{
        cy.request({
            method : 'GET',
            url : 'https://www.metaweather.com/api/location/search/?query=san'
        }).then((res)=>{
            expect(res.body).has.length.greaterThan(10)
            const city = res.body[0].title
            return city
        }).then((city)=>{
            cy.request({
                method : 'GET',
                url : 'https://www.metaweather.com/api/location/search/?query='+city
            }).then((resp)=>{
                expect(resp.status).to.eq(200)               
                expect(resp.body[0]).has.property('location_type', 'City')
            })

        })

    })

})