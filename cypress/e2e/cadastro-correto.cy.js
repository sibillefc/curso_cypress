describe('Página de Cadastro', () => {

  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Maria aparecida');
    cy.get('[data-test="input-email"]').type('aparecida123@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    //cy.contains('button','Cadastrar').click();
    cy.get('[data-test="submit-button"]').click();
    
  })
})