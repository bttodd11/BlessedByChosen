import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./component/nav/nav";
import Title from "./component/title/title";
import Music from "./component/music/music";
import Art from "./component/art/art";

const scrollTo = e => {
  const clickedItem = e.currentTarget.dataset.pagesection;
  const section = document.getElementById(clickedItem);
  section.scrollIntoView();

  console.log("section", section);
};

const App = () => {
  return (
    <div className="hero">
      <Nav scrollTo={e => scrollTo(e)} />
      <Title />
      <Music />
      <Art />
    </div>
  );
};

export default App;
