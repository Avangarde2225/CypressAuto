/// <reference types = "Cypress" />

describe('My Fourth Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
      cy.get("#alertbtn").click()
      cy.get("#confirmbtn").click()

    
    })
  })
 