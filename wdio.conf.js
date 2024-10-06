exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'karenkododian_FoNpSZ',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'YynUNvEuAWpkwAwRZUb5',
  hostname: 'hub.browserstack.com',

  updateJob: false,
  specs: [
    './test/specs/**.e2e.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://sample.app',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};