import React, {Component} from 'react';

class Dummy extends Component{
  onYouTubeIframeAPIReady() {
    console.log("iframe ready");
     var player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: "z7Bjasi12mE",
      events: {
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  onPlayerReady(event) {
    console.log("player ready");
    event.target.playVideo();
  }

  start(){
        this.onYouTubeIframeAPIReady.bind(this)();
  }
  render(){
    return(
        <div>
        <button onClick={this.start.bind(this)}>Buttoin</button>
        <div id="player"/>
        </div>
    );
  }
}

export default Dummy;
