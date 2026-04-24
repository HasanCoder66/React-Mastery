import React from "react";

const Input = React.memo(({ type, placeholder, handler, value, field ,className}) => {
  return (
    <input
    className={`${className} w-[200px] p-3 border-1 border-gray-700 outline-none rounded-2xl` }
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        handler(field, e.target.value)
      }}
    //   onChange={(e) => {
    //     handler((prev) => ({...prev, [field]:e.target.value}))
    //   }}
      value={value}
    />
  );
})

export default Input;
