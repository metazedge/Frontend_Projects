// App.js
import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.scss";
const App = () => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [products, setProducts] = useState({ products: [] });
  const [query, setQuery] = useState("");
  const [selectedCategory, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    axios
      .get(
        "https://dummyjson.com/products?limit=100&select=id,title,price,category,thumbnail"
      )
      .then((response) => {
        setLoaded(true);
        setProducts(response.data.products);
      })
      .catch((error) => {
        setLoaded(true);
        setError(error);
      });
  }, []);

  const data = Object.values(products);
  const categories = [...new Set(data.map((item) => item.category))];
  const filteredProducts = data
    .filter(
      (product) =>
        product.category && product.category.includes(selectedCategory)
    )
    .filter((product) =>
      // product.title.toLowerCase().includes(query.toLowerCase())
      product.title.trim().toLowerCase().includes(query.trim().toLowerCase())
    );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const resetFilters = () => {
    setQuery("");
    setCategory("");
    setCurrentPage(1);
  };
  return (
    <div className="App">
      <Header />
      <Home />
      <Search query={query} setQuery={setQuery} />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />

      <ProductList products={currentProducts} resetFilters={resetFilters} />

      {/* Pagination UI */}
      <Pagination
        paginate={paginate}
        filteredProducts={filteredProducts}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
