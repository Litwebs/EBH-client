import React from "react";
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
        <div className="banner-frame">
          <h1 className="banner-text-2">FLEURÉ</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
