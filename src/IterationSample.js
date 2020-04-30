import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "ELSA" },
    { id: 2, text: "ANNA" },
    { id: 3, text: "MULAN" },
    { id: 4, text: "JASMINE" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목 추가

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    console.log("click");
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
    console.log("id>>", nextNames.id);
    console.log("text>>", nextNames.text);
  };

  const onRemove = (id) => {
    //더블 클릭하면 없어짐
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>ADD</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
