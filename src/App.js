import { useEffect, useState } from "react";
import Data from "./data";
import Table from "./components/Table";
import './index.css'

function App() {

    const [data, setData] = useState(Data);

    const handleValue = (parent, id, newVal) => {
      const newData = data.map((item) => {
        if (item.id === parent || !parent) {
          const children = item.children.map((child) => {
            if (child.id === id) {
              return { ...child, value: newVal };
            }
            return child;
          });
          const sum = children.reduce((acc, curr) => acc + curr.value, 0);
          return { ...item, value: sum, children };
        }
        return item;
      });
      setData(newData);
    };

    useEffect(()=>{
        handleValue();
    },[])

  return <Table data={data} handleValue={handleValue} />;
}

export default App;
