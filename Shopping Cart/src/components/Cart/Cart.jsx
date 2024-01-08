import React, { useEffect, useState } from "react";
import "./Cart.scss";
const Cart = ({ cart, setCart, handleProductQuantity }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let totalAmount = 0;
    cart.map((item) => {
      totalAmount += item.amount * item.price;
    });
    setPrice(totalAmount);
  };
  useEffect(() => {
    handlePrice();
  });

  const removeProduct = (id) => {
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
  };
  return (
    <div className="cart">
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>

          <div>
            <button onClick={() => handleProductQuantity(item, +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleProductQuantity(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => removeProduct(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price: ${price}</span>
      </div>
    </div>
  );
};

export default Cart;
