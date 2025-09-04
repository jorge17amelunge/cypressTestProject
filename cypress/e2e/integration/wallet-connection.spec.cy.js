//const { metamask } = require("../../../synpress.config");
import '@synthetixio/synpress/cypress/support';

describe('Test metamask connection', () => {
	it('Should connect to metamask', () => {
		cy.visit('ethereum/swap');

		cy.get('body').then(($body) => {
		if ($body.find('button:contains("Accept all cookies")').length) {
			cy.get('button').contains('Accept all cookies').click();
		}
		})

		cy.get('[testdata-id="connect-button"]').first().should('be.visible').click()

		cy.get('[data-testid="rk-wallet-option-io.metamask"]').click();
	})
})