describe('Página de login', () => {
  it('CA1 O usuário pode fazer login inserindo credenciais válidas e clicando no botão login.', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.bm-burger-button > button').click();
    cy.get('#logout_sidebar_link').click();
    
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