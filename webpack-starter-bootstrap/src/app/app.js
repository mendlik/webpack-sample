import header from './header';
import callout from './callout';
import footer from './footer';

const app = (document) => {
  const element = document.createElement('div');
  element.appendChild(header());
  element.appendChild(callout(document));
  element.appendChild(footer());
  return element;
};

export default app;
