import React from "react";
import { useSelector } from "react-redux";

const Text = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Redux Toolkit </h1>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default Text;
