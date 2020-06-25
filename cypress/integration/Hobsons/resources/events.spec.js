/// <reference types="cypress" />


    


 
    describe('Assert events having current year', () => {
     
     beforeEach(() => {
    

      cy.catchException()
      cy.visit('https://www.hobsons.com/resources/events')
  
  })

     it('gets all articles on current page', () => {
        cy.get('#articles').find('h4').should(($list) => {
      expect($list).to.contain('2020')

      })
  })


})
  

     
 