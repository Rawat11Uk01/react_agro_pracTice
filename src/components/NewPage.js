import React, { useState } from "react";

const NewPage = () => {
  const fakeArr = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "4" },
  ];
  const [val, setVal] = useState([]);
  const saveValHandler = (a, i) => {
    console.log(a,'i am a')
    const arr = [...val];
    let index = arr.findIndex((x) => x.id === a.id);
    if (index === -1) {
        arr.push(a);
    } else {
        arr.splice(index, 1);
    }
    setVal(arr);
  };
  console.log(val, "123Kittu");
  return (
    <div>
      {fakeArr.map((a, i) => (
        <button
          key={i}
          onClick={() => saveValHandler(a, i)}
          style={{ marginLeft: "20px" }}
        >
          {a.name}
        </button>
      ))}
    </div>
  );
};

export default NewPage;
