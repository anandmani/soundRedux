import React, {Component} from 'react';

import Header from './Header.js';
import NavBar from './NavBar.js';
import Content from './Content.js';
import Board from './Board.js';

import 'bootstrap/dist/css/bootstrap.css';  //instead of giving path to this in html, just import it. import is provided by node js and directly looks in node modules!
require('../../scss/style.scss');
require('../../stylesheet.css');

export default class App extends Component{

  render() {
    // console.log("Current state is:"+this.props.store); //undefined as store is no more a prop.
    return (
      <div>
        <Header/>
        <NavBar/>
        <Content/>
        <Board/>
      </div>
    );
  }
}
