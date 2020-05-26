import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './component/nav/nav';
import Title from './component/title/title';
import Music from './component/music/music';
import Art from './component/art/art';
import * as serviceWorker from './serviceWorker';

// create-react-component nav -s css

ReactDOM.render(
  <React.StrictMode>
    <div className="hero">
    <Nav />
    <Title />
    <Music />
    <Art />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
