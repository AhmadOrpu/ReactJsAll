import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

    const handleClick = () => {
    //   setCount(count + 1);
    //   setCount(count + 1);
    //   setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    //Setter Functions er vitore Updater Functions
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment+3</button>
    </div>
  );
};

export default Counter;
