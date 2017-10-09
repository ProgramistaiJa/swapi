import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import Store from './stores/store'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const stores = { Store };


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
