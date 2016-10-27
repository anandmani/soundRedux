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
    return( //changing style here itself cuz, cannot get preceedence in css. Also, since everything is floar right, listing them in reverse order
      <Nav id="filterBar" bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
          <NavItem style={{"float":"right"}} key={2} eventKey={2}>Likes</NavItem>
          <NavItem style={{"float":"right"}} key={1} eventKey={1}>Views</NavItem>
          <NavItem style={{"float":"right"}} key={0} eventKey={0} disabled> <div id="orderBy">Order By :</div> </NavItem>
      </Nav>
    );
  }
}

export default FilterBar;
