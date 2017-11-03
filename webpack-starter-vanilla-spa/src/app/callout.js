import config from '../config';
import Greeter from './Greeter';
import style from './callout.scss';

const greeter = new Greeter('Hello world!');

const createElementWithText = (document, type, text) => {
  const element = document.createElement(type);
  element.appendChild(document.createTextNode(text));
  return element;
};

const callout = (document) => {
  const element = document.createElement('div');
  element.appendChild(createElementWithText(document, 'h5', config.title));
  element.appendChild(createElementWithText(document, 'p', config.description));
  element.appendChild(createElementWithText(document, 'p', greeter.greet()));
  element.classList.add(style.callout);
  return element;
};

export default callout;
