const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1zr8eq',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
  },
  experimentalWebKitSupport: true,
})
