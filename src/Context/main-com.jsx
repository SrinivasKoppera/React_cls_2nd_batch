import FirstComponent from "./first-com";
import SecondComponent from "./second-com";
import ThirdComponent from "./third-com";
import { useState } from "react";
import { myContext } from "./useContext";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const name = "Ravi";

  return (
    <myContext.Provider value={{ count, setCount, name }}>
      <div>
        <h1>Main Component</h1>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </myContext.Provider>
  );
};

export default MainComponent;
