import React, {Component} from 'react';
import {connect} from 'react-redux';
import tabOneContentAction from '../actions/tabOneContentAction.js';
import setNextPageTokenAction from '../actions/setNextPageTokenAction.js';
import fetchingAction from '../actions/fetchingAction.js';
import {bindActionCreators} from 'redux';
import Board from './Board.js';

class Content extends Component{


  onContentFetch(response){

      this.props.fetchingAction("idle");

      var that = this;
      console.log("Content fetched");
      console.log(response);
      console.log("Next page token: "+response.nextPageToken);

      this.props.setNextPageTokenAction(this.props.navState,response.nextPageToken);

      response.items.map(function(item, index){

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

        videoMeta.videoViews = response.items[0].statistics.viewCount;
        videoMeta.likeCount = response.items[0].statistics.likeCount;
        videoMeta.dislikeCount = response.items[0].statistics.dislikeCount;
        console.log(videoMeta);
        that.props.tabOneContentAction(videoMeta, that.props.navState);

      });

    })

  }
  onYouTubeApiLoad(){//on loading GAPI client library for YouTube
          this.props.fetchingAction("fetching");
          var searchTitle = this.props.navTitlesState[this.props.navState].title;
          if(searchTitle == "Search")
            searchTitle = this.props.navTitlesState[this.props.navState].searchTitle;
          gapi.client.setApiKey("AIzaSyCSrcWsGzFXcm74Huk43YTAoWwYMpRXfYI");
          var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            order: "viewCount",
            q: searchTitle,
            maxResults: 20
          })
          request.execute(this.onContentFetch.bind(this));
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

  // componentWillMount(){
  //   gapi.load("client",this.onGapiLoad.bind(this));  //Should not be here. Because, the api call must be made when tabs change.
  // }

  render(){
    console.log("Inside Content - Render");
    console.log("navState"+this.props.navState);
    if(this.props.navTitlesState[this.props.navState].status == "new")
      gapi.load("client",this.onGapiLoad.bind(this));

    return(
      <div>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return({  //Subscribing the component only to the (sub)states mentioned in this object. not all (sub)states in the state-tree. When these states, change, the component re-renders.
    navState: state.navState,
    navTitlesState: state.navTitlesState,
  });
}

const mapDispatchToProps = function(dispatch){
  return bindActionCreators({tabOneContentAction: tabOneContentAction, fetchingAction: fetchingAction, setNextPageTokenAction: setNextPageTokenAction},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
