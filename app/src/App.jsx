import React, { useState } from "react";
import Card from "./components/Card";

import "./App.css";
const Counter = () => {
  // console.log("render");
  // const [count, setCount] = useState(0);
  // console.log(count);
  return (
    <>
      {/* <div>{count}</div>

      <MeraComp />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div> */}
      <div className="cardParent">
        <Card
          title="cap ha bi"
          description="Random cap ki description daaldo..."
          btnText="Random Cap Button"
        />
        <Card
          title="batiing"
          description="Random description daaldo... batting ki"
          btnText="Random Button"
        >
          <p>ye children wala paragraph hai</p>
          <p>ye children wala paragraph hai</p>
          <p>ye children wala paragraph hai</p>
        </Card>

        <Card
          title="janiii bi"
          description="Random description daaldo..."
          btnText="Random Button"
        >
          <p>ye children wala paragraph hai</p>
        </Card>
      </div>
    </>
  );
};

export default Counter;

const MeraComp = React.memo(function meraaaComp() {
  console.log("child render howa ==>");
  return <>hello! Jani kesy ho</>;
});
