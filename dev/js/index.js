import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //this is required to persist store to all child components
import allReducers from './reducers/allReducers.js';
import App from './components/App';

import {Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

const store =new createStore(allReducers);

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory} >
                    <Route path="/" component={App}/>
                    <Route path="/:tab" component={App} />
                  </Router>
                </Provider>,
    document.getElementById('root')
);
