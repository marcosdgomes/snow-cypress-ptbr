const { defineConfig } = require("cypress");
module.exports = defineConfig({
projectId: "so9xat",
  e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config);
		},
		baseUrl: 'https://raizendev.service-now.com',
		specPattern: 'cypress/e2e/*/*/*.feature',
		viewportWidth: 1366,
		viewportHeight: 768,
		chromeWebSecurity: false,
		defaultCommandTimeout: 12000,
		experimentalSessionAndOrigin: true,
		experimentalRunAllSpecs: true,
		experimentalStudio: true,
	},
});
