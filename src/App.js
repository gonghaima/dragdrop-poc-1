import React, { useState } from 'react';
import './App.css';
import { data } from "./mock/data";
import { List } from "./dragComponent";

function App() {
  const [originData, setData] = useState(data);
  // const letMeKnow = () => alert('good!!!');
  const [colors, setColors] = useState(['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']);
  const swap = (origin, replacement) => {
    console.log(`Origin:${origin}, Replacement:${replacement}`);
    let newData = Object.assign([], originData);
    let temp = newData[origin];
    newData[origin] = newData[replacement];
    newData[replacement] = temp;
    setData(newData);
  }

  return (
    <div>
      <List colors={colors} />
    </div>
  );
}

export default App;

