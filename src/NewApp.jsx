import React from "react";
import Child from "./Child";
import useCount from "./hooks/useCount";

const NewApp = () => {
  const { count, decrement, reset } = useCount(2);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={decrement}>Decrement Number</button>
      <button onClick={reset}>Reset number</button>
      <Child />
    </div>
  );
};

export default NewApp;
