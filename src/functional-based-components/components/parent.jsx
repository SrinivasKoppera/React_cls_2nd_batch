import { useState, useEffect } from "react";
import Child from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [heading, updateHeading] = useState("Initial Heading");

  //   const increment = () => setCount(count + 1);

  //   const decrement = () => setCount(count - 1);

  useEffect(() => {
    console.log("This is mounting phase");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "24px",
          margin: "10px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "24px",
          margin: "10px",
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <div>{count < 5 && <Child />}</div>
    </div>
  );
};

export default Parent;
