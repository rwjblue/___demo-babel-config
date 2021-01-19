'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      useBabelConfig: true,
    },
    autoImport: {
      skipBabel: [
        {
          // required to avoid ember-auto-import from double transpiling qunit
          // when the project has a top level `babel.config.js`
          //
          //  Remove when https://github.com/ef4/ember-auto-import/pull/342 has landed
          package: 'qunit',
          semverRange: '*',
        },
      ],
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
