import { useContext } from "react";
import { myContext } from "./useContext";

const ThirdComponent = () => {
  const { count, setCount, name } = useContext(myContext);
  return (
    <div>
      <h4>Third Component</h4>
      <h5>Name: {name}</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ThirdComponent;
