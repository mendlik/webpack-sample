import header from './header';
import callout from './callout';

const container = () => {
  const element = document.createElement('main');
  element.classList.add('container');
  element.appendChild(callout());
  return element;
};

const app = (document) => {
  const element = document.createElement('div');
  element.appendChild(header());
  element.appendChild(container());
  return element;
};

export default app;
