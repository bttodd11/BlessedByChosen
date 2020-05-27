import React from "react";
import './music.css';

class music extends React.Component {
  render() {
    return (
      <div id="musicSection">
        <h1 class="musicTitle">Tunnel Vision</h1>
        <div class="musicContent">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F-PDQT0lVNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default music;
