import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class FilterBar extends Component{

  constructor(props){
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event){
    console.log("Pressed "+event);
  }

  render(){
    return(
      <Nav id="filterBar" bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
          <NavItem key={1} eventKey={1}>Views</NavItem>
          <NavItem key={2} eventKey={2}>Likes</NavItem>
      </Nav>
    );
  }
}

export default FilterBar;
