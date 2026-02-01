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

        //span[text()="Pessoa Física"]//..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click() 
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked') 
            
    // cy.get('input[placeholder="000.000.000-00"]')
    //    .type('06226512008')
    //     .should('have.value', '062.265.120-08')
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('06226512008')
            .should('have.value', '062.265.120-08')

        const discoveryChannels = [
            'Instagram' ,
            'YouTube' ,
            'LinkedIn' ,
            'Udemy' ,
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel)=> {
            cy.contains('label', channel)
                .find('input')
                .check() 
                .should('be.checked') 
        })

        
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf', { force: true })

        cy.get('#details').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        //cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type('texto aqui')

        const techs = [
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Playwright',
            'Robot Framework'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')
    })
}) 