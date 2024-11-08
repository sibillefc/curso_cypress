describe('API Adopet', () => {
    it ('Mensagem da API',() =>{
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/0b1764d5-242f-4d7a-8940-97480d65313a',
            headers: Cypress.env()            
        }).then((res) => {
            expect (res.status).to.be.equal(200)
            expect (res.body).is.not.empty
            expect (res.body).to.have.property('msg')
            }
        )
    })

})