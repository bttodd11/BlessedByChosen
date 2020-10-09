import React, { useState, useEffect } from "react";
// import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./component/nav/nav";
import Title from "./component/title/title";
import Music from "./component/music/music";
import Art from "./component/art/art";
import PreLoader from "./component/preLoader/preLoader";
import $ from 'jquery';






const App = () => {


  const scrollTo = e => {
    const clickedItem = e.currentTarget.dataset.pagesection;
    const section = document.getElementById(clickedItem);
    section.scrollIntoView();
  };

  const removePreLoader = () => {
    $('.preLoader').hide();
    $('.hero').show();

  }
  
  $(document).ready(function(){
    $('.hero').hide();
    $(window).on('load', function(){
      setTimeout(removePreLoader, 3000)
    }
    )
  })

 

  
  
  

  return (
    
    <body>
      <div className="preLoader">
    <PreLoader />
      </div>
    <div className="hero">
      <Nav scrollTo={e => scrollTo(e)} />
      <Title />
      <Music />
      <Art />
    </div>

    </body>
  );
};

export default App;
