import { useContext } from "react";
import { myContext } from "./useContext";

const SecondComponent = () => {
  const { count, setCount, name } = useContext(myContext);
  return (
    <div>
      <h3>Second Component</h3>
      <h5>Name: {name}</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SecondComponent;
