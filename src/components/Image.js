import React, { Component } from "react";
import "./style.css";

class Image extends Component {
  state = {
    id: 0,
    clicked: false,
    doubleClicked: false,
    image: ""
  };

  componentDidMount() {
    const { id, clicked, doubleClicked, image } = this.props.imageInfo;
    this.setState({ id, clicked, doubleClicked, image });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.doubleClicked &&
    //   this.state.doubleClicked !== prevState.doubleClicked
    // ) {
    //   this.setState({ clicked: false, doubleClicked: false });
    // }

    if (!this.props.userScore && this.props.userScore !== prevProps.userScore) {
      console.log(this.props.userScore);
      console.log(typeof this.props.userScore);
      console.log(prevProps.userScore);
      console.log(typeof prevProps.userScore);
      this.setState({ clicked: false, doubleClicked: false }, () => {});
    }
  }

  handleClick = () => {
    //make sure clicked and doubleClicked aren't booleans before casting them to booleans!!!
    let clicked =
      typeof this.state.clicked === "boolean"
        ? this.state.clicked
        : this.state.clicked === "true";
    let doubleClicked =
      typeof this.state.doubleClicked === "boolean"
        ? this.state.doubleClicked
        : this.state.doubleClicked === "true";
    console.log(clicked);
    console.log(doubleClicked);
    if (!clicked && !doubleClicked) {
      //may need a callback here to make sure App component gets the correct clicked value
      console.log("Image was clicked once");
      this.setState({ clicked: true }, () => {
        this.props.onClickStatus(this.state);
      });
    } else if (clicked && !doubleClicked) {
      console.log("Image was clicked twice");
      this.setState({ doubleClicked: true }, () => {
        this.props.onClickStatus(this.state);
      });
    } else if (clicked && doubleClicked) {
      console.log("Image should do??????");
      //this.setState({ clicked: false, doubleClicked: false });
    }
  };

  render() {
    return (
      <div>
        <img
          className="single-img"
          alt="clicked-images"
          src={this.state.image}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Image;
