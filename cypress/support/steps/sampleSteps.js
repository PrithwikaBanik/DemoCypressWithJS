const { Given } = require('@cucumber/cucumber'); // Ensure '@cucumber/cucumber' is used

Given('I open the homepage', () => {
  cy.visit('https://github.com/Crack525?tab=repositories');
});

