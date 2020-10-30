/// <reference types = "Cypress" />

describe('My Third Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
      cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
      cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
      cy.get('input[type="checkbox"]').check(["option2", "option3"])
     
     })
      




      
    })
 