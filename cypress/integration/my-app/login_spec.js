describe('Login Page Tests', () => {
  // beforeEach(() => {
  //   localStorage.clear()
  // })

  it("Visit home and get redirected to '/login' as no user is logged-in initially", () => {
    cy.visit('/')
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })

  it("Check the form exists on the '/login' page", () => {
    const formContainer = cy.get('[data-testid="loginForm"]')
    formContainer.should('have.length', 1)
    formContainer.within(() => {
      cy.get('input:first').should('have.attr', 'name', 'email')
      cy.get('input:last').should('have.attr', 'name', 'password')
    })
  })

  it('Fill form and submit', () => {
    cy.get('[data-testid="emailInput"]').type('neeraj@gmail.com')
    cy.get('[data-testid="passwordInput"]').type('neeraj')
    cy.get('[data-testid="loginForm"]').submit()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
})
