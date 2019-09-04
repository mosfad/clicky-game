import React, { Component } from "react";
import ImageCard from "./component/ImageCard";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images: images
  };

  handleOnClick = event => {
    //prevent default behavior
    event.preventDefault();
    console.log("I was clicked........");
    const newImagesArray = this.reshuffleImages();
    console.log(newImagesArray);
    /*this.setState({ images: this.reshuffleImages() }).catch(err =>
      console.log("error")
    );*/
  };

  reshuffleImages = () => {
    const arrInd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const newImage = [];

    while (arrInd.length !== 0) {
      let randNum = Math.floor(Math.random * 12);
      if (!arrInd.includes(randNum)) continue;
      //store the index for this easy access
      let currInd = arrInd[randNum];
      //shuffle a random image into  a different position
      newImage.push(this.state.image[currInd]);
      //remove current index from the array index
      arrInd.splice(randNum, 1);
    }
    console.log(newImage);
    return newImage;
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            {this.state.images.map((item, index) => {
              return index < 4 ? (
                <div className="col-md-3">
                  <ImageCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
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
