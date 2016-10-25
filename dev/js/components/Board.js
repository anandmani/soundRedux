import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Card from './Card.js';
import Spinner from './Spinner.js';

class Board extends Component{


  generateCard(item, index){
    return <Card key={index} videoObj={item}/>
  }

  scrollFunc(){
      // console.log(this.refs.board.scrollTop);
      // console.log(this.refs.board.offsetHeight);
      // console.log(this.refs.board.scrollHeight);
      if(this.refs.board.scrollTop+this.refs.board.offsetHeight>=this.refs.board.scrollHeight)
        console.log("Scrolled to bottom of the page!");


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


var mapStateToProps= function(state){
    return({
              navState: state.navState,
              videosState:state.tabOneContentState,
            });
}

export default connect(mapStateToProps)(Board);
