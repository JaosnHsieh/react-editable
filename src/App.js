import React, { Component } from "react";
import Table from "./components/Table";
// import Test from "./Test";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Table x={50} y={20} headers={["", "name", "lat", "lon"]} />
      </div>
    );
  }
}

export default App;
