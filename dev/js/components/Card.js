import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer.js';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
const playIcon = require('../../resources/playIcon.png');


class Card extends Component{
  constructor(){
    super();
    this.state = {showModal: false}
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  showImageOverlay(){
    this.refs.cardImgOverlay.style.opacity=0.8;
    this.refs.playIcon.style.opacity=1;
  }

  hideImageOverlay(){
    this.refs.cardImgOverlay.style.opacity=0;
    this.refs.playIcon.style.opacity=0;
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render(){
  var likePercent = Math.floor(this.props.videoObj.likeCount/(+this.props.videoObj.likeCount+ +this.props.videoObj.dislikeCount)*100)+"%";
  var dislikePercent = Math.floor(this.props.videoObj.dislikeCount/(+this.props.videoObj.likeCount+ +this.props.videoObj.dislikeCount)*100)+"%"; //adding +1 because we are taking floor in both cases. sending rounded 1 to dislike
  const tooltip = (
      <Tooltip id="tooltip">{this.props.videoObj.videoTitle}</Tooltip>
  );
  return (
    <div className ="card col-xs-4" onMouseEnter={this.showImageOverlay.bind(this)} onMouseLeave={this.hideImageOverlay.bind(this)} onClick={this.open}>

      <div className="card-img-wrap">
        <img className="card-img" src={this.props.videoObj.thumbnailUrl} alt="Card image cap"></img>
        <div ref="cardImgOverlay" className ="card-img-overlay" ></div>
        <img ref="playIcon" className="playIcon" src={playIcon} ></img>
      </div>
      <div className="card-block">
        <OverlayTrigger placement="right" overlay={tooltip}>
          <div className="card-title">{this.props.videoObj.videoTitle}</div>
        </OverlayTrigger>
        <h5 className="card-channel-title">{this.props.videoObj.channelTitle}</h5>
        <h5 className="card-views">{(+this.props.videoObj.videoViews).toLocaleString()} views</h5>
        <div className="card-likes-meter" style={{"width":likePercent}}></div>
        <div className="card-dislikes-meter" style={{"width":dislikePercent}}></div>
        <h5 className="card-likes">👍{(+this.props.videoObj.likeCount).toLocaleString()}</h5>
        <h5 className="card-dislikes">👎{(+this.props.videoObj.dislikeCount).toLocaleString()}</h5>
      </div>

      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.videoObj.videoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="videoPlayer" >
          <VideoPlayer videoId = {this.props.videoObj.videoId}/>
        </Modal.Body>
      </Modal>

    </div>
  );
}
}

export default Card;
