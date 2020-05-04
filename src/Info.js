import React, { useState, Fragment, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /* cleanup(뒷정리)
  컴포넌트가 언마운트 되거나 업데이트가 되기 직전에 어떤 작업을 수행하고 싶으면
  cleanup 함수를 반환해야 한다.*/
  useEffect(() => {
    console.log("effect 발생");
    console.log(name);

    return () => {
      console.log("cleanup 함수 반환");
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <Fragment>
      <div>
        NAME: <input value={name} onChange={onChangeName} />
        NICKNAME: <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <b>이름:{name}</b>
        <br />
        <b>닉넴:{nickname}</b>
        <br />
      </div>
    </Fragment>
  );
};

export default Info;
