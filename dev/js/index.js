import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux'; //this is required to persist store to all child components
import allReducers from './reducers/allReducers.js';
import App from './components/App';

import {Router, Route, hashHistory, IndexRoute, browserHistory, Redirect } from 'react-router';

const store =new createStore(allReducers);

//Adding <Redirect from="/soundRedux/src/" to="/1"/> because, in github.io, /soundRedux/src/ gets appended to my path. To load my app, we need to go to https://anandmani.github.io/soundRedux/src. At this stage, my app is loaded in the client. Therefore we can manipulate the url. If we directly type https://anandmani.github.io/1 we will get Error 404 as there is no such page. There github server only has https://anandmani.github.io/soundRedux/src/
//This is the problem. Therefore when someone wants to test routing and changes url to https://anandmani.github.io/1, Error 404 as github has no such page. Should i fix this?

ReactDOM.render(<Provider store={store}>
                  <Router history={browserHistory} >
                    <Redirect from="/soundRedux/src/" to="/1"/>
                    <Redirect from="/" to="/1"/>
                    <Route path="/:tab" component={App} />
                  </Router>
                </Provider>,
    document.getElementById('root')
);
