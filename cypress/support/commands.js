Cypress.Commands.add('programmaticLogin', () => {
  cy.setCookie('session-username', Cypress.env('USERNAME'))
  cy.visit('/inventory.html', { failOnStatusCode: false })
})
