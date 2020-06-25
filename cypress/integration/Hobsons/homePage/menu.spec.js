describe('Navigate Hamburger menu', () => {

    beforeEach(() => {
    

      cy.catchException()
      cy.visit('http://hobsons.com/')
      cy.get('.menu').click()
  
  })

    it('asserts menu has all items listed', () => {
      
       
       cy.get('nav>ul>li').should(($list) => {
          expect($list.eq(0)).to.contain('Home')
          expect($list.eq(1)).to.contain('Solutions')
          expect($list.eq(2)).to.contain('Services')
          expect($list.eq(3)).to.contain('Resources')
          expect($list.eq(4)).to.contain('Careers')
          expect($list.eq(5)).to.contain('About')
          expect($list.eq(6)).to.contain('Blog')
          expect($list.eq(7)).to.contain('Get Started')

       })
       //
       //cy.get('li').contains('Events').click()

    })

    
    it('asserts Resources children items has Events', () => {
      
     cy.get('nav>ul>li').eq(3).get('ul').should(($list) => {
      expect($list.eq(2)).to.contain('Events')

      })
          

})
})

