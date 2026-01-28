describe('Formulário de Consultoria', ()=> {

    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Thata Augustin')
        //cy.get('input[placeholder="Digite seu nome completo"]').type('Thata Augustin')
 
    })

})