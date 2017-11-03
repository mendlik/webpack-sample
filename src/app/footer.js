import style from './footer.scss';

const footer = () => {
  const element = document.createElement('footer');
  const text = document.createTextNode('Footer');
  element.appendChild(text);
  element.classList.add(style.content);
  return element;
};

export default footer;
