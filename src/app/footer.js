import style from './footer.scss';

const footer = document.createElement('footer');
const text = document.createTextNode('Footer');
footer.appendChild(text);
footer.classList.add(style.content);

export default footer;
