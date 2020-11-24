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

      cy.get("h4.card-title").each(($e1, index, $list) => {
      
        const text = $e1.text()
        if(text.includes("Blackberry")){

          cy.get('button.btn.btn-info').eq(index).click()
      
          

          }
        });

     // this.data.productName.forEach(function(element)  {
      
       // cy.select(element).click()

         // });
  products.checkOutButton().click()

  cy.get("tr td:nth-child(4) strong").each(($e1, index, $list) => {

cy.log($e1.text())
  })

  cy.contains("Checkout").click()
  cy.get('#country').type("United States of America")
  cy.get(".suggestions > ul > li > a").click()
  cy.get("#checkbox2").click({force:true})
  cy.get('input[type="submit"]').click()
  //cy.get(".alert").should("have.text","Success! Thank you! Your order will be delivered in next few weeks :-).")
  
  cy.get(".alert").then(function(element){

    const actualText = element.text()
     expect(actualText.includes("Success")).to.be.true
  
  
        })
  
    })
   
  
      



    
 
})
