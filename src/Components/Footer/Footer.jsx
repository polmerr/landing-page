import React from "react";
import "./Footer.css";
import FooterImg1 from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-gallery-cone.jpg";
import FooterImg1Desktop from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg";
import FooterImg2 from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-gallery-milkbottles.jpg";
import FooterImg2Desktop from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg";
import FooterImg3 from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-gallery-orange.jpg";
import FooterImg3Desktop from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg";
import FooterImg4 from "../../assets/sunnyside-agency-landing-page-main/images/mobile/image-gallery-sugar-cubes.jpg";
import FooterImg4Desktop from "../../assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg";
import fb from "../../assets/sunnyside-agency-landing-page-main/images/icon-facebook.svg";
import insta from "../../assets/sunnyside-agency-landing-page-main/images/icon-instagram.svg";
import twitter from "../../assets/sunnyside-agency-landing-page-main/images/icon-twitter.svg";
import pinterest from "../../assets/sunnyside-agency-landing-page-main/images/icon-pinterest.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img className="gallery-img mobile" src={FooterImg2} alt="" />
        <img className="gallery-img desktop" src={FooterImg2Desktop} alt="" />
        <img className="gallery-img mobile" src={FooterImg3} alt="" />
        <img className="gallery-img desktop" src={FooterImg3Desktop} alt="" />
        <img className="gallery-img mobile" src={FooterImg1} alt="" />
        <img className="gallery-img desktop" src={FooterImg1Desktop} alt="" />
        <img className="gallery-img mobile" src={FooterImg4} alt="" />
        <img className="gallery-img desktop" src={FooterImg4Desktop} alt="" />
      </div>
      <div className="footer-main">
        <h1 className="footer-title">sunnyside</h1>
        <div className="footer-items">
          <h3>About</h3>
          <h3>Services</h3>
          <h3>Project</h3>
        </div>
        <div className="footer-links">
          <FontAwesomeIcon className="footer-link" icon={faFacebook} />
          <FontAwesomeIcon className="footer-link" icon={faInstagram} />
          <FontAwesomeIcon className="footer-link" icon={faTwitter} />
          <FontAwesomeIcon className="footer-link" icon={faPinterest} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
