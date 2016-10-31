import React, {Component} from 'react';

import Header from './Header.js';
import NavBar from './NavBar.js';
import Content from './Content.js';
import Board from './Board.js';
import FilterBar from './FilterBar.js';

import 'bootstrap/dist/css/bootstrap.css';  //instead of giving path to this in html, just import it. import is provided by node js and directly looks in node modules!
require('../../stylesheet.css');

export default class App extends Component{

  render() {
    // console.log("Current state is:"+this.props.store); //undefined as store is no more a prop.
    console.log("In app ");
    console.log(this.props);
    return (
      <div id="app">
      <div id="player"></div>
        <Header/>
        <NavBar {...this.props}/>
        <FilterBar/>
        <Content {...this.props}/>
        <Board {...this.props}/>
      </div>
    );
  }
}
