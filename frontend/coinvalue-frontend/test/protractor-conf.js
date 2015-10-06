exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: false,

  baseUrl: 'http://admin:seventh@localhost:8081/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 360000
  }
};
