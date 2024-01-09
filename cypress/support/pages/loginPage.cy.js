class loginPage{

    clickLogin(){
        cy.get('ng-login > a').click()
    }
    
    inputUsername(username){
        cy.get('#loginUserName').type(username)
    }

    inputPassword(password){
        cy.get('#loginPassword').type(password)
    }

    submitLoginButton(){
        cy.get('.btn-primary').click()
    }
}
export default new loginPage()