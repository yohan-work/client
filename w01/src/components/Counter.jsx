import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
