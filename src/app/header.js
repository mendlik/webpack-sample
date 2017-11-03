import style from './header.scss';

const header = () => {
  const element = document.createElement('header');
  const text = document.createTextNode('Header');
  element.appendChild(text);
  element.classList.add(style.content);
  return element;
};

export default header;
