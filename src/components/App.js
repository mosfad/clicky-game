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

  handleOnDoubleClick = clickStatus => {
    //Get the index of the item in `images` array to update ***
    this.setState({ doubleClicked: clickStatus });
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
