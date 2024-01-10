const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,

    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/*.js",
      "cypress/e2e/2-advanced-examples/*.js",
    ],
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 150000,
    baseUrl: "https://webdriveruniversity.com",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoCompression: 32,
    env: {
      first_name: "Sarah",
      homepage: "https://webdriveruniversity.com",
    },
  },
});
