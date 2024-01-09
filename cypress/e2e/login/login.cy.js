import { generateUniqueEmail, generateUniqueUsername } from "../../support/functions/functions.cy.js";
import loginPage from "../../support/pages/loginPage.cy"

const uniqueEmail = generateUniqueEmail()
const uniqueUsername = generateUniqueUsername()

describe('fitur login',()=>{
    beforeEach('visit link',()=>{
        //cy.viewport(1920, 1080)
        cy.visit('https://testautomasi.com/Home/')
    })

    it('cek berhasil masuk link',()=>{
        cy.get('.navbar-brand > .img-fluid').should('be.visible')
    })

    it.only('register',()=>{
        cy.get('.navbar-brand > .img-fluid').should('be.visible')
        cy.get(':nth-child(5) > .nav-link').invoke('removeAttr', 'target').click()
        cy.get('.site-title > a').should('be.visible')
        cy.get('#menu-item-3702 > a').click()
        cy.get('#reg_email').type(uniqueEmail)
        cy.get('#reg_username').type(uniqueUsername)
        cy.get('#reg_password').type('Welcome1234')
        cy.get('#reg_password2').type('Welcome1234')
        cy.get('.learn-press-form-register > form > :nth-child(3) > button').click()
        cy.wait(2000)
        cy.get('.lp-profile-username').should('contain', uniqueUsername)
    })
})