import './global.scss';
import app from './app';

const root = document.getElementById('root');
while (root.firstChild) {
  root.removeChild(root.firstChild);
}
root.appendChild(app);

// if (module.hot) module.hot.accept();
