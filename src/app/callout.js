import style from './callout.scss';
import config from '../config';

const createElement = (type, text) => {
  const element = document.createElement(type);
  element.innerText = text || '';
  return element;
};

const header = createElement('h5', config.title);
const description = createElement('p', config.description);

const content = createElement('div');
content.classList.add(style.callout);
content.appendChild(header);
content.appendChild(description);

export default content;
