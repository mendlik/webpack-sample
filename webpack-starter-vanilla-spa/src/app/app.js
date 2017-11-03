import callout from './callout';

const app = (document) => {
  const element = document.createElement('div');
  element.appendChild(callout(document));
  return element;
};

export default app;
