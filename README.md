# demo-babel-config

This is a demo project showing how to leverage the changes in
ember-cli-babel@7.24.0-beta.1 that allows an application (or addon) to use a
`babel.config.js` instead of relying on "magical" configuration by
`ember-cli-babel` itself.

The main changes are:

* Update to `ember-cli-babel@7.24.0-beta.1`
* Add `babel.config.js` file (with very basic config)
* Install `@babel/preset-env`
* Install `@babel/eslint-parser`
* Update `ember-cli-build.js`
  * Opt in to `useBabelConfig: true` API
  * Temporarily work around [ef4/ember-auto-import#342](https://github.com/ef4/ember-auto-import/pull/342) by adding `qunit` to `skipBabel` configuration in `ember-cli-build.js`
* Update `.eslintrc.js`
  * Add `babel.config.js` to list of "node" files
  * Change parser to `@babel/eslint-parser`

See [complete diff here](https://github.com/rwjblue/___demo-babel-config/compare/d32cc59...main).
