import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { HashRouter } from 'react-router-dom';
// import './styles/index.css';

import './styles/scss/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);