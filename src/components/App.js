import React, { Component } from "react";
import Header from "./Header";
import ImageList from "./ImageList";
import Footer from "./Footer";
import images from "../images.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    doubleClicked: false,
    images
  };

  handleOnDoubleClick = imageClicked => {
    const { id, doubleClicked } = imageClicked;
    // console.log(id);
    // console.log(doubleClicked);
    console.log(imageClicked);
    console.log(imageClicked.id);
    console.log(imageClicked.doubleClicked);
    //Get the index of the item in `images` array to update ***
    this.setState({ imageClicked });
  };

  render() {
    return (
      <div>
        Clicky Game!
        <ImageList
          onDoubleClick={this.handleOnDoubleClick}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
