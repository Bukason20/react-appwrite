import React, { useContext, useEffect, useState } from "react";
import UserContext from "./context/UserContext";

const GrandChild = ({ user }) => {
  const { student, teacher } = useContext(UserContext);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    // console.log(data);
    setData(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>{student.name}</h1>
      <h1>{teacher.path}</h1>

      {/* <ul>
        {data.map((product, id) => (
          <li>{product.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default GrandChild;
