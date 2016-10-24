import React, {Component} from 'react';

class VideoPlayer extends Component{
  onYouTubeIframeAPIReady() {
    console.log("iframe ready");
     var player = new YT.Player('videoPlayer', {
      height: '390',
      width: '600',
      videoId: this.props.videoId,
      events: {
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }

  onPlayerReady(event) {
    console.log("player ready");
    event.target.playVideo();
  }

  render(){
    this.onYouTubeIframeAPIReady.bind(this)();
    return(<div>hello</div>);
  }
}

export default VideoPlayer;
