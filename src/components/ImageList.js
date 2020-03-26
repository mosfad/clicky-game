import React, { Component } from "react";
import Image from "./Image";

class ImageList extends Component {
  state = {};
  handleClickStatus = imageClicked => {
    console.log(imageClicked.id);
    this.setState(
      { id: imageClicked.id, doubleClicked: imageClicked.doubleClicked },
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
