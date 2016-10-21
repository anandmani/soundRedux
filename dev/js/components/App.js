import React, {Component} from 'react';

import NavBar from './NavBar.js';
import Content from './Content.js';

import 'bootstrap/dist/css/bootstrap.css';  //instead of giving path to this in html, just import it. import is provided by node js and directly looks in node modules!
require('../../scss/style.scss');

export default class App extends Component{

  render() {
    console.log("Current state is:"+this.props.store);
    return (
      <div>
        <NavBar/>
        <Content/>
      </div>
    );
  }
}
