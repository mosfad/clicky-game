import React, { Component } from "react";
import Header from "./Header";
import ImageList from "./ImageList";
import Footer from "./Footer";
import images from "../images.json";

class App extends Component {
  state = {
    gameStatus: "Click an image to begin!",
    colorStatus: "light",
    score: 0,
    topScore: 0,
    images
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.score !== this.state.score &&
      this.state.score > this.state.topScore
    ) {
      this.setState({ topScore: this.state.score });
    }
  }

  handleOnDoubleClick = imageClicked => {
    //const { id, doubleClicked } = imageClicked;
    // console.log(id);
    // console.log(doubleClicked);
    // console.log(imageClicked);
    // console.log(imageClicked.id);
    console.log(imageClicked.doubleClicked);
    console.log(typeof imageClicked.doubleClicked);
    //Get the index of the item in `images` array to update ***
    this.setState({ imageClicked }, () => {
      if (!this.state.imageClicked.doubleClicked) {
        this.incrementScores();
        const imagesArr = this.shuffleImages(this.state.images);
        this.setState(
          {
            gameStatus: "You guessed correctly!",
            images: [...imagesArr]
          },
          () => this.animateGameStatus()
        );
      } else {
        //reset the game, but keep top score.
        //Get App to re-render by passing images Array(with clicked & doubleClicked properties set to false) to ImageList!!!
        this.setState(
          { gameStatus: "You guessed incorrectly!", score: 0 },
          () => this.animateGameStatus()
        );
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

  animateGameStatus = () => {
    if (this.state.gameStatus === "You guessed correctly!") {
      //todo:
      //1. change text color to green(delay may not be required.)
      //2. change text color to white after 1s
      this.setState({ colorStatus: "success" }, () => {
        setTimeout(this.restoreGameStatus, 300);
      });
    } else if (this.state.gameStatus === "You guessed incorrectly!") {
      //todo:
      //1. change text color to red(delay maynot be required.)
      //2. change text color to white after 1s
      this.setState({ colorStatus: "danger" }, () => {
        setTimeout(this.restoreGameStatus, 300);
      });
    }
  };

  restoreGameStatus = () => {
    this.setState({ colorStatus: "white" });
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
        <Header
          userScore={this.state.score}
          topScore={this.state.topScore}
          gameStatus={this.state.gameStatus}
          colorStatus={this.state.colorStatus}
        />
        <ImageList
          userScore={this.state.score}
          onDoubleClick={this.handleOnDoubleClick}
          images={this.state.images}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
