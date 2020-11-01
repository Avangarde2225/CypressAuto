/// <reference types = "Cypress" />

describe('My Fourth Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    
      cy.get(".mouse-hover-content").invoke("show")

      cy.contains("Top").click()

      cy.url().should("include", "top")



  })
 
})
