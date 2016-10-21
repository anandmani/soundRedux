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

  render(){
    console.log("Inside NavBar - Render");
    console.log("Active key is "+this.props.navState);
    return( //activeKey should be a string so, type coercing it
      <Nav bsStyle="tabs" activeKey={this.props.navState+""} onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey="1">{this.props.navTitlesState[1].replace("+"," ")}</NavItem>
        <NavItem eventKey="2" title="Item">{this.props.navTitlesState[2].replace("+"," ")}</NavItem>
        <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
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
