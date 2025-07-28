describe('Order by', () => {
  beforeEach(() => {
    // Arrange
    cy.programmaticLogin()
  })

  it('orders by Price (high to low)', () => {
    // Act
    cy.get('[data-test="product-sort-container"]').select('hilo')

    // Assert
    cy.get('.inventory_item_price')
      .first()
      .should('contain', '$49.99')
    cy.get('.inventory_item_price')
      .last()
      .should('contain', '$7.99')
  })
})
