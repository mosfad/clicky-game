import React, { Component } from "react";
import Image from "./Image";

class ImageList extends Component {
  state = { id: null, doubleClicked: false };
  handleClickStatus = clickStatus => {
    this.setState(
      { id: clickStatus.id, doubleClicked: clickStatus.click },
      () => this.props.onDoubleClick(this.state)
    );
  };
  render() {
    return (
      <div>
        {this.props.images.map(singleImage => {
          return (
            <Image
              key={singleImage.id}
              imageInfo={singleImage}
              onClickStatus={this.handleClickStatus}
            />
          );
        })}
      </div>
    );
  }
}

export default ImageList;
