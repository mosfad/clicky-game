import React, { Component } from "react";
import ImageCard from "./component/ImageCard";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images
  };

  handleOnClick = event => {
    event.preventDefault();
    //call method that reshuffles the images.
    this.shuffleImages();
  };

  shuffleImages = () => {
    const arrIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const newImages = [];
    //create an array of non repeating random numbers between 0
    while (arrIndex.length !== 0) {
      let currIndex = Math.floor(Math.random() * 12);
      if (arrIndex.includes(currIndex)) {
        //append item at this index to the new images array.
        newImages.push(this.state.images[currIndex]);
        //now remove this index from the array index
        arrIndex.splice(currIndex, 1);
      }
    }
    this.setState({ newImages });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            {this.state.images.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-md-3">
                    <ImageCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      onClick={this.handleOnClick}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="row">
            {this.state.images.map((item, index) => {
              if (index > 3 && index < 8) {
                return (
                  <div className="col-md-3">
                    <ImageCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      onClick={this.handleOnClick}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="row">
            {this.state.images.map((item, index) => {
              if (index > 7) {
                return (
                  <div className="col-md-3">
                    <ImageCard
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      onClick={this.handleOnClick}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
