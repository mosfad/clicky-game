import React, { Component } from "react";
import Image from "./Image";
import "./style.css";

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
      <div className="container">
        <div className="row">
          {this.props.images.map(singleImage => {
            return (
              <Image
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
