import React from 'react';
import ReactDOM from 'react-dom';
//'BrowserRouter' is not defined  react/jsx-no-undef
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();

