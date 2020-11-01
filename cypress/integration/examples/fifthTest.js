/// <reference types = "Cypress" />

describe('My Fourth Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
    
      cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      
        const text = $e1.text()
        if(text.includes("Python")){

          cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
              const textPrice = price.text()
              expect(textPrice).to.equal("25")

          })

        }


      })

  })
 
})
