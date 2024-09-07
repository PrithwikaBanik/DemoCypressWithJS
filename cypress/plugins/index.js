import { defineConfig } from 'cypress';
import cucumber from 'cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    }
  }
});
