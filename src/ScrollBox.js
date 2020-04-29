import React, { Component } from "react";

export default class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "none",
      height: "600px",
      width: "600px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(orange,purple)",
    };
    //   console.log("ref>.", this.box.ref);
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
