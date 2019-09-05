import React from "react";
//import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={"Image" + props.id}
          src={props.image}
          onClick={props.onClick}
          id={props.id}
          is_clicked={props.is_clicked}
        />
      </div>
    </div>
  );
}

export default ImageCard;
