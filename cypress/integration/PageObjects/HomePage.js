class HomePage{

    getEditBox (){

        cy.get('input[name = "name"]:nth-child(2)')
    }

    getTwoWayDataBindin(){

        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }
    getEntrepreneur(){
        cy.get('#inlineradio3')
    }

    getShopTab(){
        return cy.get(":nth-child(2) > .nav-link")
    }

}

export default HomePage;

