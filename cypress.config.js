const { defineConfig } = require("cypress");
const path = require("path");
const fx = require("fs-extra");

function getConfig(file) {
  const p = path.resolve("cypress\\config", `${file}.json`);
  if (!fs.existsSync(p)) {
    console.log("No custom Config file found.");
    return {};
  }
  return fs.readJson(p);
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "development";
      return getConfig(file);
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
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runMode: 0,
      openMode: 1,
    },
    env: {
      first_name: "Sarah",
      homepage: "https://webdriveruniversity.com",
    },
  },
});
