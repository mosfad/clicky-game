import React, { Component } from "react";
import Image from "./Image";
import "./style.css";

class ImageList extends Component {
  state = {
    userScore: null
  };
  handleClickStatus = imageClicked => {
    console.log(imageClicked.id);
    this.setState(
      {
        id: imageClicked.id,
        doubleClicked: imageClicked.doubleClicked,
        userScore: this.props.userScore
      },
      () => this.props.onDoubleClick(this.state)
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.images.map(singleImage => {
            return (
              <Image
                userScore={this.state.userScore}
                className="col-md-3"
                key={singleImage.id}
                imageInfo={singleImage}
                onClickStatus={this.handleClickStatus}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ImageList;
