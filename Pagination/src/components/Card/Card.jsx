import  "./Card.scss";

const Card = ({cards}) => {
  return (
    <div>
      <div className="card-container">
        {cards && cards.map(({ id, name, category }) => {
          return(
          <div className="card" key={id}>
            <p>{name}</p>
            <p className="category">{category}</p>
          </div>
          )
        })}
      </div>
     
    </div>
  );
};

export default Card;
