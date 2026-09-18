import React from "react";
import ChildComponent from "./child-component";

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  componentDidUpdate() {
    console.log("Parent Component Updated");
  }

  render() {
    return (
      <div>
        <h1>Counter APP</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.state.count < 5 && <ChildComponent />}
      </div>
    );
  }
}

export default ParentComponent;
