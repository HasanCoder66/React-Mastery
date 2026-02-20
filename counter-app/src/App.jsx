import React, { useState } from "react";

const Counter = () => {
  console.log("render");
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <div>{count}</div>

      <MeraComp />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;

const MeraComp = React.memo(function meraaaComp() {
  console.log("child render howa ==>");
  return <>hello! Jani kesy ho</>;
});
