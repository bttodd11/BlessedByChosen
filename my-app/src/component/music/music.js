import React from "react";
import AlbumCover from './img/albumCover.JPG';
import './music.css';

const music = () => {
  return (
    <div id="music" class="musicSection">
      <h1 class="musicTitle">Time Will Tell (EP)</h1>
      <div class="musicContent">
        <img class="albumCover" src={AlbumCover} />
      </div>
      <a href="https://musics.link/timewilltell?fbclid=IwAR3ROCCfXgJuzxrcMPtesfnJGosURO1cI7zYccMRf5KlRu1Q2p8AmhveCm8"> <button class="linkSection" href="www.google.com">Download</button></a>
      <div class="container videoSection">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1 class="musicTitle tunnelVision">Tunnel Vision</h1>
            <div class="musicContent">
              <iframe width="600" height="315" src="https://www.youtube.com/embed/F-PDQT0lVNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <h1 class="musicTitle tunnelVision">2 Comma$</h1>
            <div class="musicContent">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/oDJayYjreB4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default music;
