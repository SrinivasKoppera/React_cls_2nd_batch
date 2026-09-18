import { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Child Component Heading",
    };
  }

  componentDidMount() {
    console.log("Child Component Mounted");
  }

  componentDidUpdate() {
    console.log("Child Component Updated");
  }

  componentWillUnmount() {
    console.log("Child Component Unmounted");
  }

  changeHeading = () => {
    this.setState({ heading: "Heading Changed" });
  };

  render() {
    const { heading } = this.state;
    return (
      <div>
        <h1>{heading}</h1>
        <button onClick={this.changeHeading}>Click Me</button>
      </div>
    );
  }
}

export default ChildComponent;
