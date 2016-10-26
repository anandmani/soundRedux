import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Card from './Card.js';
import Spinner from './Spinner.js';
import {bindActionCreators} from 'redux';
import fetchingAction from '../actions/fetchingAction.js';

class Board extends Component{


  generateCard(item, index){
    return <Card key={index} videoObj={item}/>
  }

  scrollFunc(){
      // console.log(this.refs.board.scrollTop);
      // console.log(this.refs.board.offsetHeight);
      // console.log(this.refs.board.scrollHeight);
      if(this.refs.board.scrollTop+this.refs.board.offsetHeight==this.refs.board.scrollHeight){
        console.log("Scrolled to bottom of the page!");
        this.props.fetchingAction("next page",this.props.navState);
      }
  }

  render(){
          console.log("board navstate"+this.props.navState);
          console.log(this.props.videosState);
          //  <div className="card-likes-meter" style={width:{Math.floor(item.likeCount/(+item.likeCount+ +item.dislikeCount)*100)}}></div>
    return(

      <div className="board col-xs-10" ref ="board" onScroll={this.scrollFunc.bind(this)}>
        {this.props.videosState[this.props.navState].map(this.generateCard.bind(this))}
        <Spinner/>
      </div>
    );
  }
}


const mapStateToProps= function(state){
    return({
              navState: state.navState,
              videosState:state.tabContentState,
            });
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators({fetchingAction: fetchingAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
