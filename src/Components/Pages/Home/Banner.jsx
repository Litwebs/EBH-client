import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import bannerImage from "../../../Images/Home-new.jpeg";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="banner-overlay-2">
        <div className="banner-content">
          <h1 className="banner-text-2">FLEURÉ</h1>
          <p className="banner-tagline">where blooms meet brews</p>
          <Link to="/eid-collection" className="banner-eid-callout">
            <span className="banner-eid-kicker">New Release</span>
            <span className="banner-eid-title">Eid Collection</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
