import { defineWalletSetup } from '@synthetixio/synpress'
import { MetaMask } from '@synthetixio/synpress/playwright'

const SEED_PHRASE = 'hand ocean erosion drive coast image dynamic chest ten metal belt relief'
const PASSWORD = 'MyFirstMetaMask!23'

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const metamask = new MetaMask(context, walletPage, PASSWORD, 'nkbihfbeogaeaoehlefnkodbefgpgknn')

  await metamask.importWallet(SEED_PHRASE)

  const page = await context.newPage()

  // Go to a locally hosted MetaMask Test Dapp.
  await page.goto('https://www.sushi.com/ethereum/swap')

  await page.locator('[testdata-id="connect-button"]').click()

  await metamask.connectToDapp()
})