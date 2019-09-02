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
                    <ImageCard key={item.id} id={item.id} image={item.image} />
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
                    <ImageCard key={item.id} id={item.id} image={item.image} />
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
                    <ImageCard key={item.id} id={item.id} image={item.image} />
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
