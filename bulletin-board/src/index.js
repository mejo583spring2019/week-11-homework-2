import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./board";
import serviceWorker from "./serviceWorker";

ReactDOM.render(<Board count={50}/>,
    document.getElementById("react-container"));
serviceWorker();
