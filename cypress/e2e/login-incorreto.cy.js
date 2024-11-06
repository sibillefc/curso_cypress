describe('Página de login', () => {

    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login fora do padrão esperado', () => {
      cy.get('[data-test="input-loginEmail"]').type('anaemail.com');
      cy.get('[data-test="input-loginPassword"]').type('senha123');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
})