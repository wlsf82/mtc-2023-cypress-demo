describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
  })

  it('logs in successfully', () => {
    // Act
    cy.get('[data-test="username"]').type(Cypress.env('USERNAME'))
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD'), { log: false })
    cy.get('[data-test="login-button"]').click()

    // Assert
    cy.location('pathname').should('be.equal', '/inventory.html')
    cy.contains('.title', 'Products').should('be.visible')
  })
})
