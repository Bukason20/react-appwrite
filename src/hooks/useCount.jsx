import React, { useState } from "react";

const useCount = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return { count, increment, decrement, reset };
};

export default useCount;
