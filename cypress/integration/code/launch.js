/// <reference types="cypress" />


    
describe('Launch Application', () => {
    it('opens the application', () => {

      cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('something about the error')

    // using mocha's async done callback to finish
    // this test so we prove that an uncaught exception
    // was thrown
    done()

    // return false to prevent the error from
    // failing this test
    return false
  })

      cy.visit('http://hobsons.com/')
  })

})

     
    describe('Assert Page Title', () => {
    it('.should() - make an assertion about the page title', () => {
      // https://on.cypress.io/should
      cy.title()
        .should('eq', 'Education Advances | Hobsons')

      })
})
 

    
    describe('Assert Hero Text', () => {
    it('.should() - make an assertion about the hero graphic', () => {
      // https://on.cypress.io/should
      cy.get('h1').contains('We help students')
        .should('be.visible')

      })
})

     
     describe('Click Down Arrow', () => {
    it('.click() - click on down arrow and take snapshot of new section', () => {
      
      cy.get('.home-more').click()
      cy.get('.main.learn-more-wrapper').find('div').find('section').matchImageSnapshot('section')

      })
})

     describe('Assert Hero Text 2', () => {
    it('.should() - make an assertion about the hero graphic', () => {
      // https://on.cypress.io/should
      cy.get('h2').contains('your students?')
        .should('be.visible')

      })
})

      describe('Click Hamburger menu', () => {
    it('.click() - click on Hamburger menu', () => {
      // https://on.cypress.io/should

      cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('something about the error')

    // using mocha's async done callback to finish
    // this test so we prove that an uncaught exception
    // was thrown
    done()

    // return false to prevent the error from
    // failing this test
    return false
  })
       cy.visit('http://hobsons.com/')
      cy.wait(5000)
      cy.get('.menu').click()

    })
})


   describe('Navigate to Events', () => {
    it('Navigates to Events page', () => {


      cy.get('.nav.visible').contains('Resources').click()
      cy.get('li').contains('Events').click()
      })
})

 
    describe('Assert events having current year', () => {
     it('.children() - get child DOM elements', () => {
    // https://on.cypress.io/children
    cy.get('#articles')
      .children()
      .should('contain', '2020')
  })
})
  

     
 