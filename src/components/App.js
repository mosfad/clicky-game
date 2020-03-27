import React, { Component } from "react";
import Header from "./Header";
import ImageList from "./ImageList";
import Footer from "./Footer";
import images from "../images.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    images
  };

  handleOnDoubleClick = imageClicked => {
    //const { id, doubleClicked } = imageClicked;
    // console.log(id);
    // console.log(doubleClicked);
    console.log(imageClicked);
    console.log(imageClicked.id);
    console.log(imageClicked.doubleClicked);
    //Get the index of the item in `images` array to update ***
    this.setState({ imageClicked }, () => {
      if (this.state.imageClicked.doubleClicked === "false") {
        this.incrementScores();
        const imagesArr = this.shuffleImages(this.state.images);
        this.setState({ images: [...imagesArr] });
      } else {
        //reset the game, but keep top score.
        //Get App to re-render by passing images Array(with clicked & doubleClicked properties set to false) to ImageList!!!
        this.setState({ score: 0 });
      }
    });
  };

  incrementScores = () => {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      //figure out how to add top score in the object below............................................
      return { score: state.score + 1 };
    });
  };

  shuffleImages = arrayOfImages => {
    const imageArr = [...arrayOfImages];
    for (let i = imageArr.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let item = imageArr[i];
      imageArr[i] = imageArr[randomIndex];
      imageArr[randomIndex] = item;
    }
    console.log(imageArr);
    return imageArr;
  };

  render() {
    return (
      <div>
        <Header userScore={this.state.score} topScore={this.state.topScore} />
        <ImageList
          userScore={this.state.score}
          onDoubleClick={this.handleOnDoubleClick}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
