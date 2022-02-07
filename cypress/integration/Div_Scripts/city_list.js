/// <reference types="cypress" />

describe('Check the cities', ()=>{

    it('Get the list of cities',() =>{
        cy.request({
            method : 'GET',
            url : 'https://www.metaweather.com/api/location/search/?query=san'
        }).then((res)=>{
            expect(res.body).has.length.greaterThan(10)
            const listofcity = res.body
            return listofcity
        }).then((listofcity)=>{

            for(let i=0; i<listofcity.length;i++)
            {
            cy.request({
                method : 'GET',
                url : 'https://www.metaweather.com/api/location/search/?query='+listofcity[i].title
            }).then((resp)=>{
                expect(resp.status).to.eq(200)               
                expect(resp.body[0]).has.property('title', listofcity[i].title)
            })
        }

        })

    })

})