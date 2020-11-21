/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
import 'cypress-iframe'
import HomePage from './HomePage'
import Products from './Products'

describe('Frames Test', function() {

  before(function () {

    cy.fixture("example").then(function (data) {
     this.data = data
      
    })
    
  })
    it('Demo exe', function() {

    const homePage = new HomePage()
    const products = new Products()

      cy.visit("https://www.rahulshettyacademy.com/angularpractice/")

      homePage.getEditBox().type(this.data.name)

      homePage.getGender().select(this.data.gender)

      homePage.getTwoWayDataBindin().should("have.value", this.data.name)

      homePage.getEditBox().should("have.attr", "minlength", "2")
      homePage.getEntrepreneur().should("be.disabled")

      homePage.getShopTab().click()

      this.data.productName.each(function(element)  {
      
        cy.select(element)

          });
  products.checkOutButton().click()
  
        })
  
    })
   
  })
      



    
 

