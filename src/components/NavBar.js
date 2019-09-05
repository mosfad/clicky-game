import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-info">
      <span className="navbar-brand mb-0 h1 text-light">Clicky Game</span>
      <span className="navbar-brand mb-0 h1 text-light">
        Click An Image to Begin!
      </span>
      <span className="navbar-brand mb-0 h1 text-light">
        Score: {props.currScore} | Top Score: {props.maxScore}
      </span>
    </nav>
  );
}

export default NavBar;
//Naming system for background colors seems off
