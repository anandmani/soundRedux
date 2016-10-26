import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import navSelectAction from '../actions/navSelectAction.js';
import setSearchTitle from '../actions/setSearchTitle';
import Logo from './Logo.js';

class Header extends Component{

  checkEnter(event){
  //Make validation that card name is not empty
    var input = this.refs.searchInput.value.trim()
    if(input == "");
    else if(event.keyCode == 13){ //If value is not empty, enter triggers save button
        event.preventDefault();
        console.log("Searching for "+input);
        this.props.setSearchTitle(input.split(' ').join('+'));
        this.props.navSelectAction(7);

    }
  }

  render(){
    return(
        <div id = "header">
          <div id="headerTitle">
            TubeRedux
            <Logo/>
          </div>
          <div id="searchArea">
            <div id="searchIcon">🔍</div>
            <textArea wrap="off" id="searchInput" ref="searchInput" placeholder="Search" onKeyDown={this.checkEnter.bind(this)}/>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({navSelectAction: navSelectAction, setSearchTitle:setSearchTitle},dispatch);
}

export default connect(null,mapDispatchToProps)(Header);
