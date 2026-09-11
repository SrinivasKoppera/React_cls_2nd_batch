// import { Component } from "react";
// // import React from "react";
// // import Card from "./components/card";
// import Counter from "./components/counter";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Counter Application</h1>
//         <Counter />
//       </div>
//     );
//   }
// }

// export default App;
import { Component } from "react";
import Card from "./components/card";
import React, { Fragment } from "react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Counter Application</h1>
          <Card title="Card 1" description="This is card 1" />
          <Card title="Card 2" description="This is card 2" />
          <Card title="Card 3" description="This is card 3" />
          <Card title="Card 4" description="This is card 4" />
          <Card title="Card 5" description="This is card 5" />
          <Card title="Card 6" description="This is card 6" />
          <Card />
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}

export default App;
