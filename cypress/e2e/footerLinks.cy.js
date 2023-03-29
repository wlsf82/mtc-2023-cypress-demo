import socialItems from "../fixtures/social"

describe('Footer links', () => {
  socialItems.forEach(({ type, url }) => {
    it(`checks that ${type} link opens in a new tab`, () => {
      // Arrange
      cy.setCookie('session-username', Cypress.env('USERNAME'))
      cy.visit('/inventory.html', { failOnStatusCode: false })

      // Assert
      cy.get(`.social_${type} a`)
        .should('have.attr', 'href', url)
        .and('have.attr', 'target', '_blank')
    })
  })
})
