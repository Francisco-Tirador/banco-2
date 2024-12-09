import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css'

import store from './store/index.js'


import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(   
   
    <BrowserRouter>
        <Provider store={store}>
             <App />
        </Provider>
    </BrowserRouter>

    ,document.getElementById('root')
);
