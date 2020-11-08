/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function() {

  before(function () {

    cy.fixture("example").then(function (data) {
     this.data = data
      
    })
    
  })
    it('Demo exe', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

      cy.get("input[name='name']:nth-child(2)").type(this.data.name)

      cy.get("select").select(this.data.gender)
      
      
        
      })
    
      



  })
 

