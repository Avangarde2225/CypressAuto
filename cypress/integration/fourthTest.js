/// <reference types = "Cypress" />

describe('My Fourth Test', function() {
    it('Does not do much!', function() {

    
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
      cy.get("#alertbtn").click()
      cy.get("#confirmbtn").click()

      //window alert verification

      cy.on("window:alert",(str) =>
{
  expect(str).to.equal("Hello , share this practice page and share your knowledge")
})
cy.on("window:confirm",(str) =>
{
  expect(str).to.equal("Hello , Are you sure you want to confirm?")
})

//preventing openning another tab
cy.get("#opentab").invoke("removeAttr", "target").click()

//verification of the url

cy.url().should("include", "rahulshetty")

//going back to original page

cy.go("back")


  })
 
})
