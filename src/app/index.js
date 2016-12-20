import header from './header';
import footer from './footer';

const app = document.createElement('div');
const text = document.createTextNode('Hello, Poznań JUG');

app.appendChild(header);
app.appendChild(text);
app.appendChild(footer);

export default app;
