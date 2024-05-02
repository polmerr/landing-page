import React from "react";
import "./ImageCard_Combined.css";

function ImageCard_Combined({ imageSrc, title, description, color }) {
  return (
    <div className="combo-wrapper">
      <img className="combo-bg mobile" src={imageSrc[0]} alt="" />
      <img className="combo-bg desktop" src={imageSrc[1]} alt="" />
      <div className={`combo-content ${color}`}>
        <h1 className="combo-title">{title}</h1>
        <p className="combo-description">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard_Combined;
