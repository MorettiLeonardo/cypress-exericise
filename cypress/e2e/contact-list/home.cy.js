/// <reference types="cypress" />

describe("Teste da home", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it('Deve preencher o fomulario de contato', () => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
        cy.get('[type="text"]').type('Leonardo Moretti')
        cy.get('[type="email"]').type('leonardo@gmail.com')
        cy.get('[type="tel"]').type('119999999')
        cy.get('.adicionar').click()
    })

    it('Deve remover o primeiro contato da lista (gian Souza)', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })

    it('Deve alterar os dados do segundo contato (Bruna Costa)', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Amanda Silva')
        cy.get('[type="email"]').type('amanda@gmail.com')
        cy.get('[type="tel"]').type('4399999999')
        cy.get('.alterar').click()
    })
})