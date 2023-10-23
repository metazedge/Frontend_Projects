import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../CounterSlice";

const Button = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Button;
