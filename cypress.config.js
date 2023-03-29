const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: false,
  },
  experimentalWebKitSupport: true,
})
