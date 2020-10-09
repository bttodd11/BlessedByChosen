import React from "react";
import preLoadImg from './img/loader.png';
import './preLoad.css';



const preLoader = () => {
return (
<div>
<img class="preLoadImg"  src={preLoadImg} />
</div>
)
  }

export default preLoader;
