describe('Formulário de Consultoria', ()=> {

    it('Deve solicitar consultoria individual', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Thata Augustin')
        //cy.get('input[placeholder="Digite seu nome completo"]').type('Thata Augustin')

        cy.get('#email').type('thata@gmail.com')
        cy.get('#phone').type('47 00000-9900')

        cy.get('#consultancyType').select('Individual')
        // pode ser usado value/label/texto
 
    })

}) 