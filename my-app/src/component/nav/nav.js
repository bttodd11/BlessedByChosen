import React from "react";
import './nav.css';

// This is where I am having my issue, I would like to have the nav link to the artSection 
// div under the art component 


const nav = (props) =>{
  const { ScrollTo } = props;

    return (
      <div classBar="navBar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand text-white" href="#">Blessed By Chosen</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link text-white" id="music" onClick={(e) => ScrollTo(e)} data-pageSection="music">Music</a>
              <a class="nav-item nav-link text-white" id="collections" onClick={(e) => ScrollTo(e)} data-pageSection="collections">Collections</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default nav;
