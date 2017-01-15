import React from 'react';
import ReactDom from 'react-dom';
import './theme/global.scss';
import App from './app/App';

ReactDom.render(
  <App />,
  document.getElementById('root')
);

// if (module.hot) module.hot.accept();
