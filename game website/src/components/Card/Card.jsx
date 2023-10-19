import React from "react";
import data from "../../data";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      {data.map(({ id, img, title, desc }) => (
        <div className="card__container" key={id}>
          <img src={img} alt="img" />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      ))}
       
      
    </div>
  );
};

export default Card;
