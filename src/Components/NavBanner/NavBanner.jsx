import "./NavBanner.css";
import React from "react";
import { useState } from "react";
import orange from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-header.jpg";
import orange2 from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-header.jpg";
import burger from "../../assets/sunnyside-agency-landing-page-main/images/icon-hamburger.svg";
import arrow from "../../assets/sunnyside-agency-landing-page-main/images/icon-arrow-down.svg";

function NavBanner() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="wrapper">
      <img className="banner-bg mobile" src={orange} alt="" />
      <img className="banner-bg desktop" src={orange2} alt="" />
      <div className={`mobile-menu ${mobileMenu ? "showMenu" : ""}`}>
        <div className="triangle"></div>
        <h2>About</h2>
        <h2>Services</h2>
        <h2>Projects</h2>
        <button>CONTACT</button>
      </div>
      <div className="banner-content">
        <div className="nav">
          <h3>Sunnyside</h3>
          <div className="nav-items">
            <h4>About</h4>
            <h4>Services</h4>
            <h4>Projects</h4>
            <button>CONTACT</button>
          </div>

          <img
            className="burger"
            src={burger}
            alt=""
            onClick={() => setMobileMenu((prev) => !prev)}
          />
        </div>
        <div className="title">
          <h1>We are creatives</h1>
          <img className="arrow" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBanner;
