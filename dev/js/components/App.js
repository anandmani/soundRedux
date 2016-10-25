import React, {Component} from 'react';

import Header from './Header.js';
import NavBar from './NavBar.js';
import Content from './Content.js';
import NextPageContent from './NextPageContent';
import Board from './Board.js';

import 'bootstrap/dist/css/bootstrap.css';  //instead of giving path to this in html, just import it. import is provided by node js and directly looks in node modules!
require('../../stylesheet.css');

export default class App extends Component{

  scrollFunc(){
      // console.log(this.refs.app.scrollTop);
      // console.log(this.refs.app.offsetHeight);
      // console.log(this.refs.app.scrollHeight);
      if(this.refs.app.scrollTop+this.refs.app.offsetHeight>=this.refs.app.scrollHeight)
        console.log("Scrolled to bottom of the page!");


  }

  render() {
    // console.log("Current state is:"+this.props.store); //undefined as store is no more a prop.
    return (
      <div id="app" ref="app" onScroll={this.scrollFunc.bind(this)}>
      <div id="player"></div>
        <Header/>
        <NavBar/>
        <Content/>
        <NextPageContent/>
        <Board/>
      </div>
    );
  }
}
