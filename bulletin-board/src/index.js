import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Note from "./note";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Note />, document.getElementById("react-container"));
registerServiceWorker();
