import socialItems from "../fixtures/social"

describe('Footer links', () => {
  it(`checks that social links open in a new tab`, () => {
    // Arrange
    cy.setCookie('session-username', Cypress.env('USERNAME'))
    cy.visit('/inventory.html', { failOnStatusCode: false })

    socialItems.forEach(({ type, url }) => {
      // Assert
      cy.get(`.social_${type} a`)
        .should('have.attr', 'href', url)
        .and('have.attr', 'target', '_blank')
    })
  })
})
