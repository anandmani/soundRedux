import React, {Component} from 'react';
import {Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import {connect} from 'react-redux';
import navSelectAction from '../actions/navSelectAction.js';
import {bindActionCreators} from 'redux';

class NavBar extends Component{

  handleSelect(eventKey){
      console.log("Inside NavBar - handleSelect \nEvent Key"+eventKey);
      this.props.navSelectAction(eventKey);
  }

  generateNavTabs(item, index){
      if(index == 0)
        return;
      return(
        <NavItem key={index} eventKey={index}>{item.title.split("+").join(" ")}</NavItem>
      )//using .split + .join _ because .replace +  replaces only first occurance of + with _
  }

  render(){
    console.log("Inside NavBar - Render");
    console.log("Active key is "+this.props.navState);
    return( //activeKey should be a string so, type coercing it?? whyy? im making it int
      <Nav bsStyle="tabs" activeKey={this.props.navState} onSelect={this.handleSelect.bind(this)}>
        {this.props.navTitlesState.map(this.generateNavTabs)}
      </Nav>
    );
  }

}


const mapStateToProps = function(state){
  console.log("state"+state);
  return{
      navState: state.navState,
      navTitlesState: state.navTitlesState
  }
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({navSelectAction: navSelectAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
