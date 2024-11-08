import { usuarios } from '../fixtures/usuarios.json'

describe('Página de Cadastro', () => {

    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();
    })
  
    usuarios.forEach(usuario => {

        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.cadastro(usuario.name, usuario.email, usuario.password, usuario.password);
        })

    })  

  })