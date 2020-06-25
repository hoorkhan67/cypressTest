/// <reference types="cypress" />


    
describe('Launch Application', () => {
  beforeEach(() => {
    

      cy.catchException()
      cy.visit('http://hobsons.com/')
  
  })



     
    
    it('.should() - make an assertion about the page title', () => {
      // https://on.cypress.io/should
      cy.title()
        .should('eq', 'Education Advances | Hobsons')

      
})
 

    
    
    it('.should() - make an assertion about the hero graphic', () => {
      // https://on.cypress.io/should
      cy.get('h1').contains('We help students')
        .should('be.visible')

      
})

     
     
    it('.click() - click on down arrow and take snapshot of new section', () => {
      
      cy.get('.home-more').click()
      cy.get('.main.learn-more-wrapper').find('div').find('section').matchImageSnapshot('section')

      
})

     
    it('.should() - make an assertion about the hero graphic', () => {
      // https://on.cypress.io/should
      cy.get('h2').contains('your students?')
        .should('be.visible')

      
})

  })

   
 