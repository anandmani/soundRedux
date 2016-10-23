import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
const playIcon = require('../../resources/playIcon.png');

class Board extends Component{

  showImageOverlay(){
    // this.refs.card-img-overlay.style.value=0.8;
    // this.refs.playIcon.style.value=1;
    console.log("mouse over");
    // ReactDOM.findDOMNode(this.refs.playIcon).style.backgroundColor="blue";
    ReactDOM.findDOMNode(this.refs.text).value="lol";
  }
  generateCard(item, index){
    var likePercent = Math.floor(item.likeCount/(+item.likeCount+ +item.dislikeCount)*100)+"%";
    var dislikePercent = Math.floor(item.dislikeCount/(+item.likeCount+ +item.dislikeCount)*100)+1+"%"; //adding +1 because we are taking floor in both cases. sending rounded 1 to dislike

    return (
      <div key={index} className ="card col-xs-4" onClick={this.showImageOverlay.bind(this)}>
        <div className="card-img-wrap">
          <img className="card-img" src={item.thumbnailUrl} alt="Card image cap"></img>
          <div ref="cardImgOverlay" className ="card-img-overlay" ></div>
          <img ref="playIcon" className="playIcon" src={playIcon} ></img>
        </div>
        <div className="card-block">
          <div className="card-title">{item.videoTitle}</div>
          <h5 className="card-views">{(+item.videoViews).toLocaleString()} views</h5>
          <div className="card-likes-meter" style={{"width":likePercent}}></div>
          <div className="card-dislikes-meter" style={{"width":dislikePercent}}></div>
          <h5 className="card-likes">👍{(+item.likeCount).toLocaleString()}</h5>
          <h5 className="card-dislikes">👎{(+item.dislikeCount).toLocaleString()}</h5>
          <textArea ref="text"/>
        </div>
      </div>
    );
  }

  render(){
          console.log("board navstate"+this.props.navState);
          console.log(this.props.videosState);
          //  <div className="card-likes-meter" style={width:{Math.floor(item.likeCount/(+item.likeCount+ +item.dislikeCount)*100)}}></div>
    return(

      <div className="board col-xs-10">
        {this.props.videosState[this.props.navState].map(this.generateCard.bind(this))}
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
