import 'babel-polyfill';

// See: https://reactjs.org/docs/javascript-environment-requirements.html
global.requestAnimationFrame = callback =>
  setTimeout(callback, 0);
