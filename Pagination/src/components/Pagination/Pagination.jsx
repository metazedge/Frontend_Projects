import { useState } from "react";
import "./Pagination.scss";
import Card from "../Card/Card";
const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const lastIndex = cardsPerPage * currentPage;
  const firstIndex = lastIndex - cardsPerPage;
  const cards = data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.max(Math.ceil(data.length / cardsPerPage), 1);

  const numbers = [...Array(numberOfPages).keys()].map((i) => i + 1);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <Card cards={cards} />
      <div class="container">
        <div class="pagination">
          <ul>
            <li>
              <a onClick={prevPage} href="#">
                Prev
              </a>
            </li>

            {numbers.map((value, id) => (
              <li
                className={`li ${currentPage === value ? "active" : ""}`}
                key={id}
              >
                <a onClick={() => changeCurrentPage(value)} href="#">
                  {value}
                </a>
              </li>
            ))}

            <li>
              <a onClick={nextPage} href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
