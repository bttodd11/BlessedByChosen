import React from "react";
import Facebook from './img/face.png';
import Instagram from './img/insta.png';
import './title.css';

class title extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title"> Chosen</h1>
        <nav class="navbar navbar-light bg-light ">
          <a class="navbar-brand mx-auto" href="#">
          <img title="navIcon" src={Facebook} alt="my-img" class="icons mr-5" />
          <img title="navIcon" src={Instagram} alt="my-img" class="icons" />
          </a>
</nav>
    </div>
    )
  }
}

export default title;

