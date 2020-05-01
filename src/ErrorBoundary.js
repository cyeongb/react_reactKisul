import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  /* 에러 잡는 컴포넌트*/
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    console.log("componentDidCatch 호출");
    this.setState({
      error: true /*componentDidCatch가 잡으면 error 를 true로 변환 */,
    });
    console.log("error>>", error, "info>>", info);
  }
  render() {
    console.log("에러잡는 컴포넌트 ErrorBoundary 호출");
    console.log("에러여부>>", this.state.error);

    if (this.state.error) {
      return <div>ERROR!!</div>;
    }
    console.log("children은 누구?>>", this.props.children);
    return this.props.children;
  }
}
