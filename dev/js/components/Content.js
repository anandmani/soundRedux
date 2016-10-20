import React, {Component} from 'react';
import {connect} from 'react-redux';

class Content extends Component{
  render(){
    console.log("Inside Content - Render");
    return(
      <div>
        Body{this.props.navState}
        Making AJAX call
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return({
    navState: state,
  });
}

export default connect(mapStateToProps)(Content);
