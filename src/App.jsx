import { Component } from "react";
// import React from "react";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <div>
        <Card title="card title" description="card description" />
      </div>
    );
  }
}

export default App;
// class App extends React.Component {}
