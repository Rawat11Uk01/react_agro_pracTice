import React from "react";
import { useState } from "react";
import AddDevice from "./AddDevice";
const NewPage = () => {
  //   const dummyData = [{ firstName: "", lastName: "" }];
  const [input1, setUserInput1] = useState("");
  const [layer, setLayer] = useState([]);

  const chaneHandler1 = (data) => {
    const dataNew = [...data]
    setUserInput1(dataNew);
  };

  const newArr = new Array(layer).fill(1);
  const selectLayerHandler = (e) => {
    setLayer(+e.target.value);
  };
  console.log(input1, "input1");
  return (
    <>
      <div style={{ border: "1px solid red", padding: "20px 0 0 50px" }}>
        <label style={{ display: "block" }}>Layers</label>
        <select onChange={(e) => selectLayerHandler(e)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>
      </div>
      {newArr?.map((a, i) => (
        <AddDevice key={i} chaneHandler1={chaneHandler1}/>
      ))}
    </>
  );
};

export default NewPage;
