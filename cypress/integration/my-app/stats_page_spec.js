describe('Navigate to the id page', () => {
  it("Should route to Home Page '/'", () => {
    cy.visit(Cypress.config().baseUrl + '/')
  })

  it("Fill form and submit, route to '/' and validate user' credentials", () => {
    cy.get('[data-testid="emailInput"]').type('neeraj@gmail.com')
    cy.get('[data-testid="passwordInput"]').type('neeraj')
    cy.get('[data-testid="loginForm"]').submit()
    cy.url().should('eq', Cypress.config().baseUrl + '/')

    cy.get('[data-testid="nameContainer"]').should('contain', 'Neeraj Sewani')
    cy.get('[data-testid="emailContainer"]').should('contain', 'neeraj@gmail.com', () => {
      expect(localStorage.getItem('email')).equal('neeraj@gmail.com')
    })
  })

  it('On each card click navigate to a different route with id appended in the end', () => {
    const random = Math.round(Math.random() * 100)
    cy.get('[data-testid="card-root"]')
      .eq(random - 1)
      .click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/${random}`)
  })
})

describe('Verify the UI on the page', () => {
  it('Should check the details', () => {
    cy.get('[data-testid="statsCard"]').should('have.length', 1)
    cy.get('[data-testid="firstAppearance"]').should('have.length', 1)
    cy.get('[data-testid="publisher"]').should('have.length', 1)
  })
})
