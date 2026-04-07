import React from "react";
import "./Banner2.css";
import bannerImage from "../../../Images/Home3-new.jpeg";

const Banner2 = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* <div className="banner-overlay-2"> */}
      {/* <div className="banner-frame"> */}
      {/* <h1 className="banner-text-2">FLEURÉ</h1> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Banner2;
