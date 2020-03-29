import React from "react";
import ReactDOM from "react-dom";
//import "./style.scss";****use this for Sass files
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./components/style.css";

ReactDOM.render(<App />, document.querySelector("#root"));
