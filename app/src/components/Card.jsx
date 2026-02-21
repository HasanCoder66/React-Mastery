import React from "react";
import "../App.css";

const Card = ({ title, description, btnText, children }) => {
    console.log("Card chlaaa ==>")
//   console.log(title);
const handler = () => {
    console.log("Card chlaaa ==>")
}
  return (
    <div className="card">
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="body">
        <p>{description}</p>
        {children}
      </div>
      <div className="footer">
        <button onClick={handler}>{btnText}</button>
      </div>
    </div>
  );
};

export default React.memo(Card);
