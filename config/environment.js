'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'cbe',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  // `ember-cli-post-build-copy` configuration needed to copy files from `/dist/`
  // to the chrome folder
  ENV['ember-cli-post-build-copy'] = {
    replace: true,
    development: [
      ['/assets/vendor.js', 'chrome/assets/vendor.js'],
      ['/assets/vendor.css', 'chrome/assets/vendor.css'],
      ['/assets/cbe.js', 'chrome/assets/cbe.js'],
      ['/assets/cbe.css', 'chrome/assets/cbe.css'],
      ['/assets/images', 'chrome/assets/images']
    ]
  };

  ENV.APP.autoboot = false;

  return ENV;
};
