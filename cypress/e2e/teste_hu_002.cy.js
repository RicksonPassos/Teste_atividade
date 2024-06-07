describe('Página de produtos', () => {
    it('CA1 Exibição de Produtos e Preços: Quando o usuário acessa a tela de compra, todos os produtos disponíveis devem ser exibidos junto com seus preços', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('body').should('contain', 'Sauce Labs Backpack');
     
      
    })
  
    it('CA6 Mensagem de erro deve surgir ao não inserir  o campo de email e o de senha e clicar no botão login.', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
  
    })
  
    it('CA7 Mensagem de erro deve surgir ao inserir apenas o campo senha e não preencher o campo email', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
    })
    
    it('CA8 Mensagem de erro deve surgir ao inserir apenas o campo email e não preencher o campo senha', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
    })
  
    it('CA9 Verificar mensagem de erro ao informar credenciais invalidas.', () => { 
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('senhaerrada');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('be.visible');
    })
  
  })