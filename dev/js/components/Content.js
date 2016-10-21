import React, {Component} from 'react';
import {connect} from 'react-redux';


class Content extends Component{

  onContentFetch(response){
      console.log("Content fetched");
      console.log(response);
      console.log("Next page token: "+response.nextPageToken);

      response.items.map(function(item, index){
      // console.log("");
      // console.log("Video Index: "+ ++index);//note this is index in page! not index of all results. Index is a string index + 1 appends 1. thus, ++index
      // console.log("Video Title: "+item.snippet.title);
      // console.log("Video Id: "+item.id.videoId);
      // console.log("Video Desc: "+item.snippet.description);
      // console.log("Channel Title: "+item.snippet.channelTitle);
      // console.log("Thumbnail url: "+item.snippet.thumbnails.high.url);//all are 360x480?
      var videoMeta = {
        videoIndex: index+1, //Need to input logic for next page
        videoTitle: item.snippet.title,
        videoId: item.id.videoId,
        videoDesc: item.snippet.description,
        channelTitle: item.snippet.channelTitle,
        thumbnailUrl: item.snippet.thumbnails.high.url
      }
      //Since we make another async call for every video to get viewCount, the order we retrieve the list in is lost. Hence, we maintain videoIndex.
      // console.log(videoMeta);    //Although the videoMeta object does not have videoViews as a prop here, console.log will print videoView as a prop, cuz it holds videoMeta as a reference and by the time it executes, videoMeta is updated.

      var request = gapi.client.youtube.videos.list({
        part: "statistics",
        id: item.id.videoId
      })

      request.execute(function(response){
        // console.log("Video views: "+response.items[0].statistics.viewCount);
        // console.log("Video Likes: "+response.items[0].statistics.likeCount);
        // console.log("Video Dislikes: "+response.items[0].statistics.dislikeCount);
        videoMeta.videoViews = response.items[0].statistics.viewCount;
        videoMeta.likeCount = response.items[0].statistics.likeCount;
        videoMeta.disklikeCounr = response.items[0].statistics.dislikeCount;
        console.log(videoMeta);

        //Update state
      });

    })

  }
  onYouTubeApiLoad(){//on loading GAPI client library for YouTube
          gapi.client.setApiKey("AIzaSyCSrcWsGzFXcm74Huk43YTAoWwYMpRXfYI");
          var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            order: "viewCount",
            q: "Dota+2",
            maxResults: 2
          })
          request.execute(this.onContentFetch);
  }

  onGapiLoad(){ //on loading GAPI client library, we can start using gapi.client.
    console.log("Gapi loaded");
     gapi.client.load('youtube', 'v3', this.onYouTubeApiLoad.bind(this));
     //This call is synchronous. Don't use sync calls. Also, the response json has to be parsed which is a pain in the ass
    // var xhr                                                            = new XMLHttpRequest();
    // xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part =snippet&order=viewCount&q=Dota+2&type=video&maxResults=2&key=AIzaSyCSrcWsGzFXcm74Huk43YTAoWwYMpRXfYI", false);
    // xhr.send();
    // console.log("xhr response"+xhr.response);
  }

  render(){
    console.log("Inside Content - Render");
    gapi.load("client",this.onGapiLoad.bind(this));
    console.log("...");
    return(
      <div>
        Body{this.props.navState}
        Making AJAX call
        <div className ="card">
          <img className="card-img-top" src="..." alt="Card image cap"></img>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
          </div>
        </div>
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
