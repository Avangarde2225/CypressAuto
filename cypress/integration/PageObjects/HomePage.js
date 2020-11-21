class HomePage{

    getEditBox (){

        cy.get('input[name = "name"]:nth-child(2)')
    }

}

export default HomePage;

