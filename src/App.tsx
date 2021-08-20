import * as React  from "react";
import "./App.css";
// import the DiagramComponent
import Home from '../src/Home'
export default class App extends React.Component<{}, {}> {
  render() {

    return (
      <div>
          <Home />
      </div>
    );
  }
}
