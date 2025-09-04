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

		cy.get('[testdata-id="connect-button"]').should('be.visible').click()

		//cy.get('[data-testid="rk-wallet-option-io.metamask"]').click();
		cy.connectToDapp();
		//cy.wait(60000);
		//cy.connectToDapp(['Account 1']);
		//cy.get('.popover-content').within(() => {
		//// Interact with the popup UI elements
		//cy.get('[data-testid="your-button-selector"]').click();
		//});
		//cy.visit('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html');
		//cy.window().then(win => {
		//win.chrome.tabs.create({ url: `chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html#unlock` });
		//	cy.get('[data-testid="unlock-password"]').type(password)
		//});

		//testdata-id="swap-from-input"
		//testdata-id="swap-to-input"
	})
})