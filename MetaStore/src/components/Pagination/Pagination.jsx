import React from "react";
import "./Pagination.scss";
const Pagination = ({
  filteredProducts,
  paginate,
  productsPerPage,
  currentPage,
}) => {
  return (
    <ul className="pagination">
      {Array.from(
        { length: Math.ceil(filteredProducts.length / productsPerPage) },
        (_, index) => (
          <li
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        )
      )}
    </ul>
  );
};

export default Pagination;
