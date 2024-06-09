import React from "react";

const Input = ({ inputValue, onchange, parent }) => {
  return (
    <input
      type="number"
      value={inputValue}
      onChange={onchange}
      disabled={!parent}
    />
  );
};

export default Input;
