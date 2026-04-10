import TextField from "@mui/material/TextField";
import React from "react";

const InputCmp = ({ label, value, name, handleFieldValChange  }) => {
    // console.log(handleValChange )
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      sx={{
        color: "white",
        marginBottom: "10px",
      }}
      value={value}
      onChange={(e) => {
        handleFieldValChange(name,e.target.value);
      }}
    />
  );
};

export default InputCmp;
