import React from "react";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-primary">
        <a className="navbar-brand" href="#">
          Clicky Game
        </a>
        <h3 className="nav-item text-light">Click an image to begin!</h3>
        <h3 className="nav-item text-light">
          Scores: {props.userScore || 0} &ensp;|&ensp; Top Scores:{" "}
          {props.topScore || 0}
        </h3>
      </nav>
      <div className="jumbotron">
        <p className="text-center jumb-header">Clicky Game</p>
        <p className="text-center jumb-text">
          Click on the image to earn points, but don't double click on any!
        </p>
      </div>
    </div>
  );
};

export default Header;
