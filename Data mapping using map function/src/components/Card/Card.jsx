import "./Card.scss";
import data from "../../data/data";
const Card = () => {
  return (
    <div className="card">
      {data.map(({ id, title, description, image, link }) => {
        return (
          <div className="container" key={id}>
            <img src={image} alt="image 1" loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} download={true}>
              Image link
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
