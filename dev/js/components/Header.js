import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
        <div id = "header">
          <div id="headerTitle">
            TubeRedux
          </div>
          <div id="searchArea">
            <div id="searchIcon">🔍</div>
            <textArea wrap="off" id="searchInput" placeholder="Search"/>
          </div>
        </div>
    );
  }
}

export default Header;
