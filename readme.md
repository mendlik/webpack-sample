# Webpack Starter

Starter [webpack](https://webpack.js.org/) projects.
Use them as a starting point for a single page applications.

- [webpack-starter-vanilla-spa](webpack-starter-vanilla-spa) - Framework agnostic starter project of a single page application. It means that there is no react/angular/vue.js specific code.
- [webpack-starter-react-spa](webpack-starter-react-spa) - Simple single page application that uses react.


## Features

All starter projects share same features:

- ES6 compilation with [Babel](http://babeljs.io/)
- Resource optimization with [Webpack](https://webpack.js.org/)
- Code linting with [Eslint](https://eslint.org/)
- Unit and snapshot tests with [Jest](https://facebook.github.io/jest/)

## Commands

All starter projects share same commands:

Quickly show the production result:

```
npm run build
npm run serve
```

### Basic commands
- `npm run build` - builds the project
- `npm run clean` - removes a build directory
- `npm run serve` - starts a static http server that serves resources from a build directory
- `npm run watch` - starts a development server with [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
- `npm run test` - run all tests
- `npm run lint` - run a source code linter
- `npm run ci` - command for continuous integration. Run: clean, lint, test, build

### Advanced test commands
- `npm run test:file ./test/**/Greeter.unit.spec.js` - run test on defined file pattern
- `npm run test:unit` - run only unit tests
- `npm run test:ui` - run only [ui tests](https://facebook.github.io/jest/docs/en/snapshot-testing.html)
- `npm run test:ui:update` - run only ui tests and [updates snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html#updating-snapshots)

### Advanced build commands
- `npm run build:debug` - build project in debug mode (source maps, no resource minification, no hashes)
- `npm run build:watch` - build project in debug mode and rebuild on change

### Advanced watch commands
- `npm run watch:reload` - development server without HMR. Simply reloads the page. Slower than `npm run watch`.
- `npm run watch:livereload` - the slowest version but the one that is most similar to how it looks on production.
