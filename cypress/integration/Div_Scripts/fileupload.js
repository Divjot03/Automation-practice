/// <reference types="cypress" />
describe('Test the File upload', () => {

    it('File upload with input type as file', ()=> {

        cy.visit('http://automationpractice.com/index.php?controller=contact')
        
        
        //const testFile = 'feather.jpg'
        //cy.fixture('feather.jpg').then(fileContent => {
            cy.get("[type='file']").attachFile('feather.jpg');
           // fileContent: fileContent.toString(),
            //fileName: 
            
           
        
        
    //})

})

})