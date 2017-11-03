import app from './app/app';

const root = document.getElementById('root');
while (root.firstChild) {
  root.removeChild(root.firstChild);
}
root.appendChild(app(document));

if (module.hot) module.hot.accept();
