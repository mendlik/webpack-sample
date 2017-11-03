import 'babel-polyfill';

// Theme dependencies
const loadTheme = () => {
  // Issue: https://github.com/Dogfalo/materialize/issues/3812
  // eslint-disable-next-line
  const jquery = require('jquery');
  // eslint-disable-next-line
  const popper = require('popper.js');
  global.$ = jquery;
  global.jQuery = jquery;
  global.Popper = popper;
  // eslint-disable-next-line
  require('bootstrap');
};

loadTheme();
