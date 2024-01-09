describe('akses moladin',()=>{
    beforeEach('visit link',() => {
        cy.viewport(1280,720)
        cy.visit('https://moladin.com/')
        cy.get('body').click()
    });
    
    it('akses web moladin sukses', () => {
        
    });
    
})