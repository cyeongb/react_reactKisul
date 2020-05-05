import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": //증가
      return { value: state.value + 1 };
    case "DECREMENT": //감소
      return { value: state.value - 1 };
    default:
      return state; //해당 없으면 기존상태 반환
  }
}

const Counter = () => {
  // 이 함수는 state 값과 dispatch함수를 받아온다.
  // state는 현재 가리키고있는 상태값 이고
  // dispatch 는 action 을 발생시키는 함수이다.
  // 그래서 함수안에 파라미터로 dispatch의 값을 넣어주면 안에있는 reducer 함수가 호출되는 구조이다.
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        Currently counter is <b>{state.value}</b>.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
