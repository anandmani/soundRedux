import React, {Component} from 'react';
import {connect} from 'react-redux';

class Board extends Component{

  render(){
          console.log("board navstate"+this.props.navState);
          console.log(this.props.videosState);
    return(

      <div>
        {this.props.videosState[this.props.navState].map(function(item, index){
          return (
            <div key={index} className ="card col-md-3">
              <div className="card-img-wrap">
                <img className="card-img" src={item.thumbnailUrl} alt="Card image cap"></img>
              </div>
              <div className="card-block">
                <h4 className="card-title">{item.videoTitle}</h4>
                <h5 className="card-views">{item.videoViews}</h5>
                <h5 className="card-likes">{item.likeCount}</h5>
                <h5 className="card-dislikes">{item.dislikeCount}</h5>
              </div>
            </div>
          );
        })}
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
