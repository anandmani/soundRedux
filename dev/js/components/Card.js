import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const playIcon = require('../../resources/playIcon.png');

class Card extends Component{
  showImageOverlay(){
    this.refs.cardImgOverlay.style.opacity=0.8;
    this.refs.playIcon.style.opacity=1;
  }

  hideImageOverlay(){
    this.refs.cardImgOverlay.style.opacity=0;
    this.refs.playIcon.style.opacity=0;
  }

  render(){
  var likePercent = Math.floor(this.props.videoObj.likeCount/(+this.props.videoObj.likeCount+ +this.props.videoObj.dislikeCount)*100)+"%";
  var dislikePercent = Math.floor(this.props.videoObj.dislikeCount/(+this.props.videoObj.likeCount+ +this.props.videoObj.dislikeCount)*100)+"%"; //adding +1 because we are taking floor in both cases. sending rounded 1 to dislike

  return (
    <div className ="card col-xs-4" onMouseEnter={this.showImageOverlay.bind(this)} onMouseLeave={this.hideImageOverlay.bind(this)}>
      <div className="card-img-wrap">
        <img className="card-img" src={this.props.videoObj.thumbnailUrl} alt="Card image cap"></img>
        <div ref="cardImgOverlay" className ="card-img-overlay" ></div>
        <img ref="playIcon" className="playIcon" src={playIcon} ></img>
      </div>
      <div className="card-block">
        <div className="card-title">{this.props.videoObj.videoTitle}</div>
        <h5 className="card-views">{(+this.props.videoObj.videoViews).toLocaleString()} views</h5>
        <div className="card-likes-meter" style={{"width":likePercent}}></div>
        <div className="card-dislikes-meter" style={{"width":dislikePercent}}></div>
        <h5 className="card-likes">👍{(+this.props.videoObj.likeCount).toLocaleString()}</h5>
        <h5 className="card-dislikes">👎{(+this.props.videoObj.dislikeCount).toLocaleString()}</h5>
      </div>
    </div>
  );
}
}

export default Card;
