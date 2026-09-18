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

import React from "react";
// import Counter from "./components/counter";
// import ParentComponent from "./components/lifecycle-methods/parent-component";
// import Parent from "./functional-based-components/components/parent";
import Home from "./functional-based-components/components/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
