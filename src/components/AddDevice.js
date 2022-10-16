import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
const AddDevice = ({chaneHandler1}) => {
  const [input, setUserInput] = useState([{ firstName: "", lastName: "" }]);
  const chaneHandler = (e, i) => {
    e.preventDefault();
    const value = e.target.value;

    setUserInput((input) => {
      return { ...input, [e.target.name]: value };
    });
    chaneHandler1(input);
  };
  return (
    <>
      <div>
        <input type="text" name="firstName" onChange={(e) => chaneHandler(e)} />
        <input type="text" name="lastname" onChange={(e) => chaneHandler(e)} />
      </div>
    </>
  );
};
export default AddDevice;
