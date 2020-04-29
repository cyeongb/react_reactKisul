import React, { Component } from "react";
import "./App.css";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.scrollBox.scrollToBottom()}>BOTTOM</button>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      </div>
    );
  }
}

export default App;
