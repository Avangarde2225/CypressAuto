/// <reference types = "Cypress" />

describe('My Second Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("ca")
      

      cy.get(".products").as("productLocator")

     // cy.contains("ADD TO CART")
      cy.get("@productLocator").find(".product").each(($e1, index, $list) => {

      const textVeg = $e1.find("h4.product-name").text()
      if(textVeg.includes("Cashews")){

        $e1.find("button").trigger("click")
      }
     })
     cy.get('.cart-icon > img').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.contains('Place Order').click()
    
      
    })
  })