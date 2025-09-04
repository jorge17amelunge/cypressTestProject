# cypressTestProject
Setup and Execution Instructions
    Step 1: Clone the Repository
        Clone this repository to your local machine using the following command:
        git clone https://github.com/your-repo/your-project.git
    Step 2: Install Dependencies
        Navigate to the project directory and run the following command to install all dependencies:
        npm install
    Step 3: Run Tests
        To run the tests, you can use one of the following options:
        Run tests in headless mode:
        npx cypress run
        Run tests with UI:
        npx cypress open
    In the Cypress UI, select the option "E2E Testing" and then click "Start E2E testing in Chrome". When the Chrome window opens, click the file "wallet-connection.spec.cy.js" to start the test.
NOte: Ensure MetaMask Extension is already installed in chrome.


Challenges Faced While Testing
    Setting up Cypress Testing Framework for MetaMask Integration
    One of the most significant challenges we faced was setting up the Cypress testing framework to integrate with MetaMask. The main issues we encountered were:
    Incompatible versions: Ensuring compatibility between Cypress, MetaMask, and our application's dependencies was a challenge.
    Wallet simulation: Simulating MetaMask's behavior in a testing environment proved complex, particularly when handling transactions and wallet connections.