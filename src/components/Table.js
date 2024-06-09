import React from "react";
import Row from "./Row";

const Table = ({ data, handleValue }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <td>Label</td>
          <td>Value</td>
          <td>Input</td>
          <td>Allocation %</td>
          <td>Allocate Val</td>
          <td>Variance %</td>
        </thead>
        <tbody>
          {data.map((item) => (
            <>
              <Row
                key={item.id}
                item={item}
                handleValue={handleValue}
                parent={null}
              />
              {item.children &&
                item.children.length > 0 &&
                item.children.map((child) => (
                  <Row
                    key={child.id}
                    item={child}
                    handleValue={handleValue}
                    parent={item.id}
                  />
                ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
