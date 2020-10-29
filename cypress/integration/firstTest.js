/// <reference types = "Cypress" />

describe('My First Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("ca")
      cy.get(".product:visible").should("have.length",4)

      cy.get(".products").as("productLocator")

      cy.get("@productLocator").find(".product").should("have.length",4)
      
      cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function() {

        console.log('sf')
      })

     
     // cy.contains("ADD TO CART")
      cy.get("@productLocator").find(".product").each(($e1, index, $list) => {

      const textVeg = $e1.find("h4.product-name").text()
      if(textVeg.includes("Cashews")){

        $e1.find("button").trigger("click")
      }
     })
     cy.get(".brand").then(function (logo) {

      cy.log(logo.text())
     })
      




      
    })
  })