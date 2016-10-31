import React, {Component} from 'react';
import {Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import {connect} from 'react-redux';
import navSelectAction from '../actions/navSelectAction.js';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class NavBar extends Component{

  handleSelect(eventKey){
      console.log("Inside NavBar - handleSelect \nEvent Key"+eventKey);
      this.props.navSelectAction(eventKey);
      //<Link to={`/${index}`}>
      const path = `/${eventKey}`;
      console.log("url should change to "+path);
      browserHistory.push(path);
  }

  generateNavTabs(item, index){
      if(index == 0)
        return;
      if(item.title=="Search")
        return <NavItem key={index} eventKey={index} disabled>{item.title.split("+").join(" ")}</NavItem>
      else
        return( //Note: Using template literal here (ES6). Use   `` instead of "" and ${} for variable
        <NavItem key={index} eventKey={index}>{item.title.split("+").join(" ")}</NavItem>
      )//using .split + .join _ because .replace +  replaces only first occurance of + with _
  }

  render(){
    console.log("Inside NavBar - Render");
    if(this.props.params.tab)
      console.log(this.props.params.tab);
    console.log("Active key is "+this.props.navState);
    return( //activeKey should be a string so, type coercing it?? whyy? im making it int
      <Nav id="navBar" bsStyle="tabs" activeKey={this.props.navState} onSelect={this.handleSelect.bind(this)}>
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
