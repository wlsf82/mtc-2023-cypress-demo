describe('Checkout', () => {
  beforeEach(() => {
    // Arrange
    cy.setCookie('session-username', Cypress.env('USERNAME'))
    cy.visit('/inventory.html', { failOnStatusCode: false })
  })

  it('goes through the whole checkout process successfully', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Walmyr')
    cy.get('[data-test="lastName"]').type('Filho')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    
    // Assert
    cy.contains('.title', 'Checkout: Complete!').should('be.visible')
    cy.contains('.complete-header', 'Thank you for your order!')
      .should('be.visible')
  })
})
