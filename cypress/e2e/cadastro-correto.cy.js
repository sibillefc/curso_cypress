describe('Página de Cadastro', () => {

  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.cadastro('Maria aparecida', 'aparecida123@email.com', 'Senha123', 'Senha123')
    
  })
})