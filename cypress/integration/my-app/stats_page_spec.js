describe('Navigate to the id page', () => {
  it("Should route to Home Page '/'", () => {
    cy.visit(Cypress.config().baseUrl + '/')
  })

  it("Fill form and submit, route to '/' and validate user' credentials", () => {
    cy.get('[data-test-id="emailInput"]').type('neeraj@gmail.com')
    cy.get('[data-test-id="passwordInput"]').type('neeraj')
    cy.get('[data-test-id="loginForm"]').submit()
    cy.url().should('eq', Cypress.config().baseUrl + '/')

    cy.get('[data-test-id="nameContainer"]').should('contain', 'Neeraj Sewani')
    cy.get('[data-test-id="emailContainer"]').should('contain', 'neeraj@gmail.com', () => {
      expect(localStorage.getItem('email')).equal('neeraj@gmail.com')
    })
  })

  it('On each card click navigate to a different route with id appended in the end', () => {
    const random = Math.round(Math.random() * 100)
    cy.get('[data-test-id="card-root"]')
      .eq(random - 1)
      .click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/${random}`)
  })
})

describe('Verify the UI on the page', () => {
  it('Should check the details', () => {
    cy.get('[data-test-id="statsCard"]').should('have.length', 1)
    cy.get('[data-test-id="firstAppearance"]').should('have.length', 1)
    cy.get('[data-test-id="publisher"]').should('have.length', 1)
  })
})
