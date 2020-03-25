import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images: images,
    currScore: 0,
    maxScore: 0
  };

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    console.log("I was clicked........");
    const newImagesArray = this.reshuffleImages();
    console.log(newImagesArray);
    this.setState({ images: newImagesArray });
    /*.catch(err =>
      console.log("error")
    );*/
    const clickState = event.target.getAttribute("data-clicked");
    //update the scores for the current round
    console.log(clickState);
    if (clickState === "false") {
      //user successfully clicked a previously unclicked image.
      console.log("A successful click.........");
      this.updateScore(clickState);
      //Update the click state of this image component
      let indexClickedImage = this.getClickedImage(event.target.id);
      console.log(indexClickedImage);
      //use destructuring to get images array of objects
      console.log("Here is the current state");
      console.log(this.state);
      const { images } = { ...this.state };
      //get a reference to the array of objects
      const currState = images;
      console.log("Here is the current state of images object ");
      console.log(currState);
      console.log("-------------------------------------------");
      console.log(currState[indexClickedImage]);
      //update the status of the clicked image.
      currState[indexClickedImage].isClicked = "true";
      //finally, update the state of the object
      this.setState({ images: currState }); //SETTING THE STATE HERE MIGHT BE NULLIFYING THE RESHUFFLING IN `line 19`
    } else {
      this.updateScore();
    }
    console.log("After updating the state of the images.....");
    console.log(this.state.images);
    //this.updateScore(this.state.images[0].isClicked);
  };

  reshuffleImages = () => {
    console.log("I am shuffling the image cards.......");
    const arrIndex = [];
    const newImage = [];
    let randNum;
    //create a shuffled array of indices that will be used to create a random image array.
    while (arrIndex.length < 12) {
      randNum = Math.floor(Math.random() * 12);
      //if random number is already in index array, then restart loop
      if (arrIndex.includes(randNum)) continue;
      arrIndex.push(randNum);
    }
    //create reshuffled array using arrIndex
    for (let i = 0; i < arrIndex.length; i++) {
      newImage.push(this.state.images[arrIndex[i]]);
    }
    return newImage;
  };

  updateScore = (loss = "true") => {
    let currentScore = this.state.currScore;
    let maximumScore = this.state.maxScore;
    console.log("Updating score after click.....");
    if (loss === "false") {
      console.log("isClicked is false, so this click was a good one...");
      this.setState({ currScore: currentScore++, maxScore: maximumScore++ });
    } else if (loss === "true") {
      this.setState({ currScore: 0 });
      console.log("isClicked is true, so this click was a bad one....");
    }
  };

  getClickedImage = idOfImage => {
    //console.log("id of image is " + typeof idOfImage);
    //console.log("id of random image is " + typeof this.state.images[5].id);
    let indexOfImage;
    for (let i = 0; i < this.state.images.length; i++) {
      //find the index of the image clicked in `images` array.
      if (parseInt(idOfImage) === this.state.images[i].id) {
        indexOfImage = i;
      }
    }
    return indexOfImage;
  };

  render() {
    return (
      <div>
        <NavBar
          currScore={this.state.currScore}
          maxScore={this.state.maxScore}
        />
        <div className="container">
          <div className="row">
            {this.state.images.map((item, index) => {
              return index < 4 ? (
                <div className="col-md-3">
                  <ImageCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    is_clicked={item.isClicked}
                    onClick={this.handleOnClick}
                  />
                  {console.log("The key here is " + item.id)}
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="row">
            {this.state.images.map((item, index) => {
              return index > 3 && index < 8 ? (
                <div className="col-md-3">
                  <ImageCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    is_clicked={item.isClicked}
                    onClick={this.handleOnClick}
                  />
                  {console.log("The key here is " + item.id)}
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="row">
            {this.state.images.map((item, index) => {
              return index > 7 ? (
                <div className="col-md-3">
                  <ImageCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    is_clicked={item.isClicked}
                    onClick={this.handleOnClick}
                  />
                  {console.log("The key here is " + item.id)}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

/*THIS ALGORITHM DOESN'T WORK**************************************
  altShuffleImages = () => {
    const arrInd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const newImage = [];

    while (arrInd.length !== 0) {
      let randNum = Math.floor(Math.random() * 12);
      console.log("Random number generated is " + randNum);
      if (!arrInd.includes(randNum)) continue;
      //store the index for this easy access
      let currInd = arrInd.indexOf(randNum);
      console.log("Current index is " + currInd);
      //shuffle a random image into  a different position
      console.log("Before push, image was: ");
      console.log(newImage);
      newImage.push(
        this.state.images[currInd]
      ); //Algorithm here is wrong.
      //Maybe I need a check here to make sure the image being added isn't a repeat
      console.log("After push, image is: ");
      console.log(newImage);
      //remove current index from the array index
      arrInd.splice(currInd, 1); //Algorithm here is wrong?
      console.log("array index is ");
      console.log(arrInd);
    }
    console.log(newImage);
    return newImage;
  };**********************************************************************/
