// src/index.js
import React from 'react';
import {render} from 'react-dom';
import store from "./js/store/index";
import App from "./js/components/app/App";
import {Provider} from 'react-redux';

import {addActivity} from './js/actions/index';
import rootReducer from './js/reducers/index';



render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

window.store = store;
window.addActivity = addActivity;
window.rootReducer = rootReducer;