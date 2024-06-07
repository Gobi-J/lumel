import React, { useEffect, useState } from "react";

import Data from "../data";
import Input from "./Input";

const Table = () => {
  const [elec, setElec] = useState(0);
  const [furni, setFurni] = useState(0);

  const handlePercent = (item) => {
        
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>Label</tr>
          <tr>Value</tr>
          <tr>Input</tr>
          <tr>Allocation %</tr>
          <tr>Allocation Val</tr>
          <tr>Variance %</tr>
        </thead>
        <tbody>
          {Data.map((item) => {
            <tr>
              <td>{item.label}</td>
              <td>{item.value}</td>
              <Input />
              <Button onClick={()=>handlePercent(item)} />
              <Button onClick={} />
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;