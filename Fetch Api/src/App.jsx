import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([])
  const fetchApi =async () =>{
    const response = await fetch("https://dummyjson.com/products?limit=100&select=title,price,thumbnail")
    const data = await response.json()
    if(data && data.products){
      setProducts(data.products)
    }

  }
  console.log(products)

  useEffect(()=>{
    fetchApi()
  }, [])
  return <>
  {
    products.length > 0 && (
      <div>
        {
          products.map((prod) => (
            <>
            <img src={prod.thumbnail} alt="images"/>
            <h3>{prod.title}</h3>
            </>
          ))
        }
      </div>
    )
  }
  </>;
}

export default App;
