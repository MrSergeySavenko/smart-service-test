import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
);
