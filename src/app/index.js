import header from './header';
import footer from './footer';
import Greeter from './Greeter';

const greeter = new Greeter('Hello world!');
const app = document.createElement('div');
const text = document.createTextNode(greeter.greet());

app.appendChild(header());
app.appendChild(text);
app.appendChild(footer());

export default app;
