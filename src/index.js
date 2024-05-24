import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { App } from './pages/App.jsx'; 

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);

