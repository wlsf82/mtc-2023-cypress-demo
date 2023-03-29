describe('Checkout', () => {
  beforeEach(() => {
    // Arrange
    cy.setCookie('session-username', Cypress.env('USERNAME'))
    cy.visit('/inventory.html', { failOnStatusCode: false })
  })

  it('goes through the whole checkout process successfully', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.contains('.shopping_cart_link span', '1').should('be.visible')
    cy.contains('button', 'Remove').click()
    cy.contains('.shopping_cart_link span', '1').should('not.exist')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.contains('.shopping_cart_link span', '2')
      .should('be.visible')
      .click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]')
      .should('be.empty')
      .type('Walmyr')
    cy.get('[data-test="lastName"]')
      .should('be.empty')
      .type('Filho')
    cy.get('[data-test="postalCode"]')
      .should('be.empty')
      .type('12345')
    cy.get('[data-test="continue"]').click()

    // Assert
    cy.contains('.summary_subtotal_label', '$39.98').should('be.visible')
    
    // Act
    cy.get('[data-test="finish"]').click()

    // Assert
    cy.contains('.title', 'Checkout: Complete!').should('be.visible')
    cy.contains('.complete-header', 'Thank you for your order!')
      .should('be.visible')

    // Act
    cy.get('[data-test="back-to-products"]').click()

    // Assert
    cy.location('pathname').should('be.equal', '/inventory.html')
  })
})
