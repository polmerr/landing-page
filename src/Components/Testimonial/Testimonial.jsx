import React from "react";
import "./Testimonial.css";

function Testimonial({ avatar, description, Name, position }) {
  return (
    <div className="testimonial">
      <img className="avatar" src={avatar} alt="" />
      <p className="avatar-description">{description}</p>
      <h4 className="avatar-name">{Name}</h4>
      <p className="avatar-position">{position}</p>
    </div>
  );
}

export default Testimonial;
