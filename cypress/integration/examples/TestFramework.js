/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function() {

  before(function () {
    
  })
    it('Demo exe', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

      cy.get("input[name='name']:nth-child(2)").type("Joe")

      cy.get("select").select("Female")
      
      
        
      })
    
      



  })
 

