import React, { useState } from "react";
const [count, setCount]= useState;
function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
