import '@synthetixio/synpress/cypress/support';
import { synpressCommandsForMetaMask } from '@synthetixio/synpress/cypress/support';

Cypress.on('uncaught:exception', () => {
  return false
})

synpressCommandsForMetaMask()

Cypress.Commands.add('setupMetamask', () => {
  cy.visit('https://www.sushi.com/ethereum/swap'); // URL de tu aplicación
  cy.window().its('ethereum').should('exist');
  cy.window().then((win) => {
    win.ethereum.request({ method: 'eth_requestAccounts' });
  });
});

Cypress.Commands.add('switchToMetamaskWindow', allAccounts => {
  return cy.task('switchToMetamaskWindow', allAccounts);
})

Cypress.Commands.add('acceptMetamaskAccess', allAccounts => {
  return cy.task('acceptMetamaskAccess', allAccounts);
})


