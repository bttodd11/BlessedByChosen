import React    from "react";
import './art.css';

class art extends React.Component {
  render() {
    return (
    <div class="artSection" id="collections">
<h1 class="collectionText">Collections</h1>
<div class="container collectionSection">
  <div class="row">
    <div class="col-sm">
      <h2 class="seriesText">Home Base Series</h2>
      One of three columns
    </div>
    <div class="col-sm">
      <h2 class="seriesText">Gif Collection</h2>
      One of three columns
    </div>
    <div class="col-sm">
      <h2 class="seriesText">Gif Collection</h2>
      One of three columns
    </div>
  </div>
</div>
    </div>
    )
  }
}

export default art;
