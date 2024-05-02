import React from "react";
import "./ImageCard-Seperated.css";

function ImageCard_Seperated({
  imageSrc,
  cardTitle,
  cardDescription,
  imgSide,
  color,
}) {
  return (
    <div className={`card-wrapper ${imgSide}`}>
      <div className="img-container">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-info">
        <h1>{cardTitle}</h1>
        <p>{cardDescription}</p>
        <button className={color}>LEARN MORE</button>
      </div>
    </div>
  );
}

export default ImageCard_Seperated;
