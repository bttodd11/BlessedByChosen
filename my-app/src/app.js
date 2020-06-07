import React, { useState, useEffect } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./component/nav/nav";
import Title from "./component/title/title";
import Music from "./component/music/music";
import Art from "./component/art/art";
import PreLoader from "./component/preLoader/preLoader";

const scrollTo = e => {
  const clickedItem = e.currentTarget.dataset.pagesection;
  const section = document.getElementById(clickedItem);
  section.scrollIntoView();

  console.log("section", section);
};



const App = () => {

  const [loader, setLoader ] = useState(false);
  
  return (
    <body>
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
