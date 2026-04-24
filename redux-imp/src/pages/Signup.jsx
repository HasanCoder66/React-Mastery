import React, { useState } from "react";
import { Button, Input } from "../components/index.js";
import "../App.css"
import { signup } from "../redux/feature/authSlice/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const setInputField = (field, val) => {
    setForm((prev) => ({...prev, [field] : val}))

  };

  const submitHanlder = ( ) => {
     if(!form.email.trim() || !form.password.trim() || !form.userName.trim()) { 
          console.log("please fill the fields.")
          return
        }
    console.log("signup form .........", form)

    dispatch(signup(form))

    setForm({
    email: "",
    userName: "",
    password: "",
  })

  setTimeout(() => {
    navigate("/login")
  },1500)
  }

  return (
    <div className="h-[450px] w-[500px] rounded-2xl shadow-xl p-4 flex flex-col justify-evenly items-center bg-amber-50">
      <h1 className="mt-3 mb-3 text-2xl font-bold text-center">Signup your account</h1>

      <div className="flex gap-4 flex-wrap mt-3 mb-3">
        <Input
          type="text"
          placeholder="Enter your email"
          // handler={setForm}
          handler={setInputField}
          value={form.email}
          field="email"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          // handler={setForm}
          handler={setInputField}
          value={form.password}
          field="password"
        />
        <Input
          type="text"
          placeholder="Enter your username"
          handler={setInputField}
          // handler={setForm}
          value={form.userName}
          field="userName"
        />
        
      </div>

      <div>
      <Button title={"Signup"} handler={submitHanlder} />
      </div>
    </div>
  );
};

export default Signup;
