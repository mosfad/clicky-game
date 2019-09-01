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
        <ul className="list-group">
          {this.state.images.map(item => (
            <li className="list-group-item" key={item.id}>
              <ImageCard key={item.id} id={item.id} image={item.image} />
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
