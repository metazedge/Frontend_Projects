import React from "react";
import "./MostPopular.scss";
import Card from "../Card/Card";
const MostPopular = () => {
  return (
    <div className="popular__wrapper">
      <h1>
        Most Popular <span>Right Now</span>
      </h1>

      <Card />
      <div className="btn">
        <button>Discover Popular</button>
      </div>
    </div>
  );
};

export default MostPopular;
