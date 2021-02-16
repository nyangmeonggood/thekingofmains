import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sorry from "./Sorry";

var userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('trident') > -1) {

  ReactDOM.render(
    <React.StrictMode>
      <Sorry/>
    </React.StrictMode>,
    document.getElementById("root")
  
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}