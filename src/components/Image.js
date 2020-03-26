import React, { Component } from "react";

class Image extends Component {
  state = {
    clicked: false,
    doubleClicked: false
  };

  componentDidMount() {
    const { id, clicked, doubleClicked, image } = this.props.imageInfo;
    this.setState({ id, clicked, doubleClicked, image });
  }

  handleClick = () => {
    let clicked = this.state.clicked;
    let doubleClicked = this.state.doubleClicked;
    if (!clicked && !doubleClicked) {
      //may need a callback here to make sure App component gets the correct clicked value
      this.setState({ clicked: true });
    } else if (clicked && !doubleClicked) {
      this.setState({ doubleClicked: true }, () =>
        this.props.onClickStatus(this.state)
      );
    }
  };

  render() {
    return (
      <div>
        <img
          alt="clicked-images"
          src={this.props.imageInfo.image}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Image;
