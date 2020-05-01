import React, { Component } from "react";

export default class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myref = null;

  constructor(props) {
    super(props);
    console.log("constructor ----- 초기 state 설정");
  }

  /* 부모에게서 받은 color값을 state에 동기화*/
  static getDrivedStateFromProps(nextProps, prevState) {
    console.log("getDrivedStateFromProps---- props로 받아온 값을 변화시킨다.");
    if (nextProps.color !== prevState.color) {
      console.log("다음props의 color>>", nextProps.color);
      console.log("이전 state 의 color>>", prevState.color);
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount----렌더링 된 후");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate ---- update여부 결정 끝자리가 4면 렌더링 안함 >>",
      nextState.number
    );
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ----- render종료");
  }

  handleClick = () => {
    console.log("click 할때마다 1 증가>>", this.state.number + 1);
    this.setState({
      number: this.state.number + 1,
    });
  };

  /* dom 에서 변화가 일어나기 직전의 색상 속성을 snapshot값으로 변환해서 componentDidUpdate에 반환.*/
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate ---- update 되기 전의 값을 가져오기>>",
      prevProps.color
    );
    if (prevProps.color !== this.props.color) {
      console.log("이전 props color>>", prevProps.color);
      console.log("현재 props의 color>>", this.props.color);
      return this.myref.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate 메서드---여기에 전달된 값들:");
    console.log("prevProps>>", prevProps);
    console.log("prevState>>", prevState);
    console.log("snapshot>>", snapshot);

    if (snapshot) {
      //snapshot 에서 return 한 값이 true 이면
      console.log("업데이트 되기 직전의 색상 :>>", snapshot);
    }
  }

  render() {
    console.log("render()함수 호출");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myref = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>PLUS</button>
      </div>
    );
  }
}
