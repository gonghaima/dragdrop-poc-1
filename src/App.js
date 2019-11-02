import React, { useState } from 'react';
import './App.css';
import { data } from "./mock/data";
import { DragComponent } from "./dragComponent";

function App() {
  const [originData, setData] = useState(data);
  // const letMeKnow = () => alert('good!!!');

  const swap = (origin, replacement) => {
    console.log(`Origin:${origin}, Replacement:${replacement}`);
    let newData = Object.assign([], originData);
    let temp = newData[origin];
    newData[origin] = newData[replacement];
    newData[replacement] = temp;
    setData(newData);
  }

  return (
    <div className="App">
      <DragComponent data={originData} sortData={setData} swap={swap} />
    </div>
  );
}

export default App;
