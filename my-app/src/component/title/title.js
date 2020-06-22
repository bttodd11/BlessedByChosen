import React from "react";
import Facebook from './img/face.png';
import Instagram from './img/insta.png';
import Email from './img/emailPng.png';
import './title.css';

const title = () => {
    return (
      <div className="titleSection">
        <h1 className="title"> Chosen</h1>
        <nav class="navbar navbar-light bg-light ">
          <a class="navbar-brand mx-auto" href="#">
         <a href="https://www.facebook.com/profile.php?id=605890961"><img title="navIcon" src={Facebook} alt="my-img" class="icons mr-5" /> </a>
         <a href="https://www.instagram.com/ericthechosen/"> <img title="navIcon" src={Instagram} alt="my-img" class="icons" /> </a>
         <a href=""><img title="navIcon" src={Email} alt="my-img" class="icons ml-5" /> </a>
          </a>
</nav>
    </div>
    )
  }


export default title;

