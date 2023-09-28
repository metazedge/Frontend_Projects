import "./Card.scss";
import data from "../../data/data";
import { useEffect, useState } from "react";
const Card = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  let filters = ["Mountains", "Waterfall", "Nature", "Forest"];

  const handleClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = data.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...data]);
    }
  };

  return (
    <div className="card">
      <div className="btn-container">
        {filters.map((category, id) => {
          return (
            <button
              onClick={()=>handleClick(category)}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={id}
            >
              {category}
            </button>
          );
        })}
      </div>
        {filteredItems.map(({ id, title, description, image, link }) => {
          return (
            <div className="card-container" key={id}>
            <div className="container" >
              <img src={image} alt="images" loading="lazy"/>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link}>image link</a>
            </div>
      </div>
          );
        })}
    </div>
  );
};

export default Card;