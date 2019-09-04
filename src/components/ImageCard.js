import React from "react";
//import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={props.onClick} />
      </div>
    </div>
  );
}

export default ImageCard;
