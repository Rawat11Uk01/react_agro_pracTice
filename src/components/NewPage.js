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
    console.log(a, "i am a");
    let arr = [...val];
    let index = arr.find((x) => x.id === a.id);
    console.log(index, "indexindex");
    if (arr.length > 0) {
      if (index) {
        arr = arr.filter((x) => x.id != index.id);
      } else {
        arr.push(a);
      }
    } else {
      arr.push(a);
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
