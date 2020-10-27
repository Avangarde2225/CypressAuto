/// <reference types = "Cypress" />

describe('My First Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("ca")
      cy.get(".product:visible").should("have.length",4)
      cy.get(".products").find(".product").should("have.length",4)

      cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click()
     // cy.contains("ADD TO CART")

      
    })
  })