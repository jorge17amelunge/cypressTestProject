//const { defineConfig } = require("cypress");
//import { configureSynpressForMetaMask } from '@synthetixio/synpress/cypress'
//module.exports = defineConfig({
//	e2e: {
//        supportFile: "cypress/support/index.js",
//        setupNodeEvents(on, config) {
//            on('before:browser:launch', async (browser = {}, arguments_) => {
//				if (browser.name === 'chrome') {
//					arguments_.args.push('--disable-background-timer-throttling');
//					arguments_.args.push('--disable-backgrounding-occluded-windows');
//					arguments_.args.push('--disable-renderer-backgrounding');
//                    //arguments_.args.push('--load-extension=chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html')
//				}
//			});
//			return configureSynpressForMetaMask(on, config)
//        },
//        specPattern: "cypress/e2e/**/*.js",
//        chromeWebSecurity: true,
//        env: {
//            extensionPath: 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/notification.html',
//        },
//    }
//});

import { configureSynpressForMetaMask } from '@synthetixio/synpress/cypress'
import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: true,
  e2e: {
    baseUrl: 'https://www.sushi.com/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.{js,jsx,ts,tsx}',
    testIsolation: false,
    async setupNodeEvents(on, config) {
      return configureSynpressForMetaMask(on, config)
    }
  }
})