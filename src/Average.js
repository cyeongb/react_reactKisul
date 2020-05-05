import React, { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  console.log("numbers>>", numbers[0]);
  console.log("numbers.length>>", numbers.length);

  if (numbers.length === 0) return 0;
  if (!numbers[0]) {
    // null 체크로, null 이면 false 를 반환한다고 함.
    console.log("여기");
    numbers[0] = 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  console.log("Average() 호출");
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    console.log("onChange 함수 이벤트.target.value>>", e.target.value);
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    console.log("onInsert 호출");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  /*useMemo 는 렌더링 하는 과정에서 특정 값이 바뀌었을때만 연산을 실행하고 
원하는 값이 바뀌지 않았으면 이전에 했던 결과를 다시 가져와서 사용한다.
그래서 값이 바뀌지 않으면 렌더링 하지 않는다 (무분별한 렌더링을 막기 위함) */
  const avg = useMemo(() => getAverage(list), { list });

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>INSERT</button>
      <br />
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>AVERAGE:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
