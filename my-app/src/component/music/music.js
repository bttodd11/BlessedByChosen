import React from "react";
import AlbumCover from './img/albumCover.JPG';
import './music.css';

const music = () => {
    return (
      <div id="music" class="musicSection">
        <h1 class="musicTitle">Time Will Tell (EP)</h1>
        <div class="musicContent">
      <img class="albumCover"  src={AlbumCover} />
        </div>
        <div class="linkSection">
          <p class="linkDownload">
            Download 
          </p>
        </div>
        <h1 class="musicTitle tunnelVision">Tunnel Vision</h1>
        <div class="musicContent">
          <iframe width="760" height="315" src="https://www.youtube.com/embed/F-PDQT0lVNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }


export default music;
