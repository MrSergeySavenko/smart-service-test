import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

import { Provider } from 'react-redux';
import { setupStore } from './__data__/store/store';

// async function enableMocking() {
//     if (process.env.NODE_ENV !== 'development') {
//         return;
//     }

//     const { worker } = await import('./mocks/browser');

//     return worker.start();
// }

// enableMocking().then(() => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>
);
