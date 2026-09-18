import React from "react";
import Card from "./card";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, description: "This is the current count" };
    console.log("this is constructor");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  // fetchData = () => {
  //   console.log("fetchData called");
  // };

  // componentDidMount() {
  //   this.fetchData();
  //   console.log("this is componentDidMount");
  // }

  // componentDidUpdate() {
  //   console.log("this is componentDidUpdate");
  // }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
        {this.state.count < 5 && (
          <Card
            title={this.state.count}
            description="This is the current count"
          />
        )}
      </div>
    );
  }
}

export default Counter;
