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
              return index < 4 ? (
                <div className="col-md-3">
                  <ImageCard key={item.id} id={item.id} image={item.image} />
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
                  <ImageCard key={item.id} id={item.id} image={item.image} />
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
                  <ImageCard key={item.id} id={item.id} image={item.image} />
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
