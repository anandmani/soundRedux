import React, {Component} from 'react';
import {connect} from 'react-redux';
class Spinner extends Component{
  render(){
    if(this.props.fetchingState == "fetching" || this.props.fetchingState == "next page"){
      return(
        <div className="spinner">
          <div className ="spinnerInnerRing">
            <div className ="spinnerInnerCircle"/>
          </div>
        </div>
      )
    }
    else{
      return <div/>;
    }
  }
}

const mapStateToProps = function(state){
    return({fetchingState: state.fetchingState});
}

export default connect(mapStateToProps)(Spinner);
