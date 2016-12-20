import style from './header.scss';

const header = document.createElement('header');
const text = document.createTextNode('Header');
header.appendChild(text);
header.classList.add(style.content);

export default header;
