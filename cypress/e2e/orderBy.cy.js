describe('Order by', () => {
  beforeEach(() => {
    // Arrange
    cy.setCookie('session-username', Cypress.env('USERNAME'))
    cy.visit('/inventory.html', { failOnStatusCode: false })
  })

  it('orders by Price (high to low)', () => {
    // Act
    cy.get('[data-test="product_sort_container"]').select('hilo')

    // Assert
    cy.get('.inventory_item_price')
      .first()
      .should('contain', '$49.99')
    cy.get('.inventory_item_price')
      .last()
      .should('contain', '$7.99')
  })
})
