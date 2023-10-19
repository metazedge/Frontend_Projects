import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="banner__wrapper">
      <img src="images/banner-bg.jpg" alt="" />
      <div className="banner__text">
        <h2>Welcome to Cyborg</h2>
        <h1>
          <span>BROWSE</span> OUR POPULAR <br /> GAMES HERE
        </h1>
        <button>Browse Now</button>
      </div>
    </div>
  );
};

export default Banner;
