import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-info">
      <span className="navbar-brand mb-0 h1 text-light">Clicky Game</span>
      <span className="navbar-brand mb-0 h1 text-light">
        Click An Image to Begin!
      </span>
      <span className="navbar-brand mb-0 h1 text-light">
        Score: 0 | Top Score: 0
      </span>
    </nav>
  );
}

export default NavBar;
