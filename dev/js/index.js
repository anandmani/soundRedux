import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //this is required to persist store to all child components
import allReducers from './reducers/allReducers.js';
import App from './components/App';

const store =new createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
    document.getElementById('root')
);
