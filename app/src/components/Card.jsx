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


// What is State ? 

// state 1 react built in object hai ===>  matlab react mai state 1 esa object hai jo data store kerke rakhta hai. jab bi state update hoti hai to component re render hojata hai.


