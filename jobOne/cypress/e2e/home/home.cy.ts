/// <reference types="cypress" />

export {}

describe('Testando a tradução da página', () => {
  it('Traduzindo a página para Português', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[id="language"]').select(0)
    cy.get('.top__leftSide > .leftSide__title').should(
      'have.text',
      'Um passo perto do seu novo emprego'
    )
  })

  it('Traduzindo a página para Inglês', () => {
    cy.get('[id="language"]').select(1)
    cy.get('.top__leftSide > .leftSide__title').should(
      'have.text',
      'One step closer to your new job'
    )
  })

  it('Traduzindo a página para Russo', () => {
    cy.get('[id="language"]').select(2)
    cy.get('.top__leftSide > .leftSide__title').should(
      'have.text',
      'На шаг ближе к новой работе'
    )

    cy.get('[id="language"]').select(0)
  })
})
