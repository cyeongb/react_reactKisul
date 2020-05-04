import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  /* useState 함수의 파라미터에는 상태의 기본값(0)을 넣어준다.
  고로 카운터의 기본값을 0으로 설정하겠다는 뜻이다.
  [상태값,상태를 설정하는 함수] 로 이루어져있다.
  이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 리렌더링 된다.*/
  return (
    <div>
      <p>
        Currently counter value is <b>{value}</b>;
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
