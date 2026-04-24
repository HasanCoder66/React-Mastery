import React from "react";

const Button = ({ title, handler }) => {
  return (
    <button
      className="px-4 py-2 bg-gray-600 font-semibold text-2xl rounded-2xl cursor-pointer text-white active:scale-90"
      onClick={handler}
    >
      {title}
    </button>
  );
};

export default Button;
