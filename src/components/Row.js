import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Row = ({ item, handleValue, parent }) => {
  const [inputValue, setInputValue] = useState(0);
  const [variance, setVariance] = useState(0);

  const handleAllocatePercent = () => {
    const oldVal = item.value;
    const percentage = inputValue / 100;
    const newVal = Math.round(oldVal + oldVal * percentage);
    handleValue(parent, item.id, newVal);
    setVariance(variance + newVal - oldVal);
  };

  const handleAllocateValue = () => {
    const newVal = inputValue;
    handleValue(parent, item.id, newVal);
  };

  const handleInput = (e) => {
    setInputValue(parseInt(e.target.value))
  }

  return (
    <tr>
      <td>{item.label}</td>
      <td>{item.value}</td>
      <td>
        <Input parent={parent} value={inputValue} onchange={handleInput} />
      </td>
      <td>
        <Button text="Change %" onclick={handleAllocatePercent} />
      </td>
      <td>
        <Button text="Update Value" onclick={handleAllocateValue} />
      </td>
      <td>{variance}</td>
    </tr>
  );
};

export default Row;
