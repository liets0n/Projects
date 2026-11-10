/// <reference types="cypress" />

describe('Sign_Up', () => {
  it('Tentando acessar uma conta com a senha errada', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.btnWrapper__item--signUp').click()

    cy.get('#name').type('Lietson Dos Santos')
    cy.get('#name').should('contain.value', 'Lietson Dos Santos')

    cy.get('[id="email"]').type('lietsondossanto@gmail.com')
    cy.get('[id="email"]').should('contain.value', 'lietsondossanto@gmail.com')

    cy.get('[id="password"]').type('12345')
    cy.get('[data-cy="passwordFieldIcon"]').click()
    cy.get('[id="password"]').should('contain.value', '12345')

    cy.get('[id="confirmPassword"]').type('12345')
    cy.get('[data-cy="confirmPasswordFieldIcon"]').click()
    cy.get('[id="confirmPassword"]').should('contain.value', '12345')
  })
})
