// cypress.config.js
const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: 'cypress/integration/**/*.feature',
    supportFile: 'cypress/support/e2e.js'
  },
});

