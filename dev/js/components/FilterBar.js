import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import setFilterAction from '../actions/setFilterAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FilterBar extends Component{

  // constructor(){
  //     super();
  //     this.handleSelect = this.handleSelect.bind(this);
  // }

  handleSelect(eventKey){
    console.log("Filter bar; Pressed "+eventKey);
    this.props.setFilterAction(eventKey);
  }

  render(){
    return( //changing style here itself cuz, cannot get preceedence in css. Also, since everything is floar right, listing them in reverse order
      <Nav id="filterBar" bsStyle="tabs" activeKey={this.props.filterState} onSelect={this.handleSelect.bind(this)}>
          <NavItem style={{"float":"right"}} key={2} eventKey={2}>Likes</NavItem>
          <NavItem style={{"float":"right"}} key={1} eventKey={1}>Views</NavItem>
          <NavItem style={{"float":"right"}} key={0} eventKey={0} disabled> <div id="orderBy">Order By :</div> </NavItem>
      </Nav>
    );
  }
}

const mapStateToProps = function(state){
  return {  filterState: state.filterState  };
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators({ setFilterAction: setFilterAction  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
