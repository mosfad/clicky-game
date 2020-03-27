import React from "react";

const Header = props => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Clicky Game
      </a>
      <h4 className="nav-item text-light">Click an image to begin!</h4>
      <h4 className="nav-item text-light">
        <span>
          Scores: {props.userScore || 0} &ensp;|&ensp; Top Scores:{" "}
          {props.topScore || 0}
        </span>
      </h4>
    </nav>
  );
};

export default Header;
