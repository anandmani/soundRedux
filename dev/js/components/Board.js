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

          const videos = [...this.props.videosState[this.props.navState]];
          const filter = (this.props.filterState == 1)? "videoIndex" : "likeCount";
          var compare = null;

          if(filter == "videoIndex"){   //This is order by Number of Views (Descending order of views).  When the API is called, it is as such returned in descending order of views. Therefore, we sort by ascending order of index.(including logic of pages)
            compare = function(a,b){
              if(a.videoIndex.substring(0,6)<b.videoIndex.substring(0,6))
                return -1;
              else if(a.videoIndex.substring(0,6)==b.videoIndex.substring(0,6)){
                return (+a.videoIndex.substring(6,a.videoIndex.length) - +b.videoIndex.substring(6,b.videoIndex.length));
              }
              else
                return 1;
            }
          }
          else{ //If filter == likeCount   //This is order by descending order of likes
            compare = function(a,b){
              return (a.likeCount - b.likeCount)* -1;  //We are multiplying by -1 to make it descending order
            }
          }

          videos.sort(compare);
          console.log("sorted");
          console.log(videos);
          //  <div className="card-likes-meter" style={width:{Math.floor(item.likeCount/(+item.likeCount+ +item.dislikeCount)*100)}}></div>
    return(

      <div className="board col-xs-10" ref ="board" onScroll={this.scrollFunc.bind(this)}>
        {videos.map(this.generateCard.bind(this))}
        <Spinner/>
      </div>
    );
  }
}


const mapStateToProps= function(state){
    return({
              navState: state.navState,
              videosState:state.tabContentState,
              filterState:state.filterState,
            });
}

const mapDispatchToProps = function(dispatch){
    return bindActionCreators({fetchingAction: fetchingAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
