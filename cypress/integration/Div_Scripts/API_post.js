/// <reference types="cypress" />  
  
describe('Test the API post', () => {
    //const { internet } = require('faker');
    //const email = internet.exampleEmail()
    //const password = internet.password()
    let accessToken = 'b7055959396993c24f43cb3a04201b6219efdc4d23cc4a29ef24e6e978368f91'    
   
    
    it("Test the post call", ()=> {
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers :{
                'Authorization': 'Bearer ' + accessToken
                 },
                 body : {
                    
                        "name" : "Automation Testing",
                        "gender" : "male",
                        "email" : 'email@gmail.com',
                        "status" : "active"                    
                   
                 }
    }).then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body.data.email).to.eq('email@gmail.com')
        }).then((res) =>{

            const id = res.body.data.id
            cy.log("Id is "+id)
 
            cy.request({
                method : 'GET',
                url : 'https://gorest.co.in/public/v1/users/'+id,
                headers :{
                    'Authorization': 'Bearer ' + accessToken
                     }
            }).then((res)=>{
                expect(res.status).to.eq(200)

            })

        })

    })


})