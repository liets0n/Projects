/// <reference types="cypress" />

describe('Sign_in', () => {
  it('Tentando acessar uma conta com a senha errada', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.btnWrapper__item--signIn').click()

    cy.get('[id="email"]').type('lietsondossanto@gmail.com')
    cy.get('[id="email"]').should('contain.value', 'lietsondossanto@gmail.com')

    cy.get('[id="password"]').type('12345')
    cy.get('[name="eyes closed"]').click()
    cy.get('[id="password"]').should('contain.value', '12345')

    cy.get('[name="eyes open"]').click()

    cy.get('.form__btn--submit').click()

    cy.get('.Toastify__toast-body').should(
      'have.text',
      'Senha ou E-mail incorreto'
    )
  })

  it('Acessando a minha conda', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.btnWrapper__item--signIn').click()

    cy.get('[id="email"]').type('lietsondossanto@gmail.com')
    cy.get('[id="email"]').should('contain.value', 'lietsondossanto@gmail.com')

    cy.get('[id="password"]').type('123456')
    cy.get('[name="eyes closed"]').click()
    cy.get('[id="password"]').should('contain.value', '123456')

    cy.get('[name="eyes open"]').click()

    cy.get('.form__btn--submit').click()
    cy.get('.title__link').should('be.visible')
  })
})
