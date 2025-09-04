import { synpressCommandsForMetaMask } from '@synthetixio/synpress/cypress/support'

Cypress.on('uncaught:exception', () => {
  // failing the test
  return false
})

synpressCommandsForMetaMask()

before(() => {
  cy.visit('/')
})