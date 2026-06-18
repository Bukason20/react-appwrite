import React, { useEffect, useState } from "react";
import GrandChild from "./GrandChild";
import useCount from "./hooks/useCount";
import useInput from "./hooks/useInput";
import useFetch from "./hooks/useFetch";

const Child = ({ user }) => {
  const [num, setNum] = useState(5);

  const { count, increment, decrement, reset } = useCount(10);

  const [name, setName] = useState("");

  const lastName = useInput("");

  const { data, loading } = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    console.log(lastName.value);
    console.log(data.products);
  }, [lastName]);

  return (
    <div>
      <GrandChild user={user} />

      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Last Name"
        // value={lastName.value}
        // onChange={lastName.onChange}

        {...lastName}
      />

      <input type="text" />
      <h1>{count}</h1>
      <button onClick={increment}>Increment number</button>

      <ul>
        {!loading && data.products !== 0 ? (
          data.products.map((product, id) => <li>{product.title}</li>)
        ) : (
          <div>No products available</div>
        )}
      </ul>
    </div>
  );
};

export default Child;
