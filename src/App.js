import React, { Component } from "react";
import "./App.css";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  console.log(
    "랜덤 컬러 :>>>",
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  /* 16777215는 color값을 hex로 표현, 000000 부터 fffff를 반환한다.*/
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    console.log("App.js 에 render() 호출");
    console.log("this.state.color>>", this.state.color);
    return (
      <div>
        <button onClick={this.handleClick}>RANDOM COLOR</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
