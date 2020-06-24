import React from "react";
import { Input } from "@material-ui/core";

const Form = ({ name, changeName }) => {
  return (
    <>
      <Input placeholder="name" value={name} onChange={changeName} />
    </>
  );
};

export { Form };
