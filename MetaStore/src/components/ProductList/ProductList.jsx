import './ProductList.scss'

const ProductList = ({ products, resetFilters }) => {

 
  return(
    <div className="wrapper">
      <button onClick={resetFilters}>Reset Filters</button>
     
      <ul className="card-grid">
        {products.map((product) => (
          <li key={product.id}>
            <article className="card">
              <img src={product.thumbnail} alt='thumbnail' /> 
             
  
               
                <h2 className="card-name">{product.title}</h2>  
               
               
                <p className="card-price">${product.price}</p>  
               
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
  };

export default ProductList;
