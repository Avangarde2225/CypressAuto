/// <reference types = "Cypress" />

describe('My seventh Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
      cy.get("#opentab").then(function (el) {
        const url = el.prop("href")
        cy.log(url)
        cy.visit(url)

        
      })
    
      



  })
 
})
