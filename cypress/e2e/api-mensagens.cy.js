describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjE3NjRkNS0yNDJmLTRkN2EtODk0MC05NzQ4MGQ2NTMxM2EiLCJhZG9wdGVyTmFtZSI6ImZhYmlvIiwiaWF0IjoxNzMxMDEyMzM4LCJleHAiOjE3MzEyNzE1Mzh9.xc6pxUe-TTaJZzH5pQyUOwZurfgJXQBjLXZUlu0rboo`
    
    it ('Mensagem da API',() =>{
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/0b1764d5-242f-4d7a-8940-97480d65313a',
            headers: { authorization }            
        }).then((res) => {
            expect (res.status).to.be.equal(200)
            expect (res.body).is.not.empty
            expect (res.body).to.have.property('msg')
            }
        )
    })

})