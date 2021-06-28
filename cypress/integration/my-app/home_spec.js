import { API_BASE_URL } from '../../../helpers/api'

const URL = 'http://localhost:3000'

describe('Home Page test cases', () => {
  it('Visit the superhero API', () => {
    // cy.request('https://superheroapi.com/api/4046207892163702')
  })

  it("Should route to Home Page '/'", () => {
    cy.visit('http://localhost:3000/')
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

  it('Should verify logged in user', () => {})
  it('Home Page should have 731 cards', () => {
    cy.get('[data-test-id="card-root"]').should('have.length', 731)
  })

  it('On each card click navigate to a different route with id appended in the end', () => {
    const random = Math.round(Math.random() * 100)
    cy.get('[data-test-id="card-root"]')
      .eq(random - 1)
      .click()
    cy.url().should('eq', `${URL}/${random}`)
  })
})
