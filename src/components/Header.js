import React from "react";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-primary">
        <a className="navbar-brand text-center" href="#">
          Clicky Game
        </a>
        <h3 className={"nav-item text-center text-" + props.colorStatus}>
          {props.gameStatus}
        </h3>
        <h3 className="nav-item text-light text-center">
          Scores: {props.userScore || 0} &ensp;|&ensp; Top Scores:{" "}
          {props.topScore || 0}
        </h3>
      </nav>
      <div className="jumbotron">
        <p className="text-center jumb-header text-light">Clicky Game</p>
        <p className="text-center jumb-text text-light font-weight-bold">
          Click on the image to earn points, but don't double click on any!
        </p>
      </div>
    </div>
  );
};

export default Header;
