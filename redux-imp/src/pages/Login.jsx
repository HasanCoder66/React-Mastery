import React, { useState } from "react";
import { Button, Input } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/authSlice/authSlice";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  

  const submitHanlder = () => {
    if (!form.email.trim() || !form.password.trim()) {
      console.log("please fill the fields.");
      return;
    }

    // console.log("login form ..........", form);

    dispatch(login(form))

    setForm({
      email: "",
      password: "",
    });
  };

  const setInputField = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <div className="h-[450px] w-[500px] rounded-2xl shadow-xl p-4 flex flex-col justify-evenly items-center bg-amber-50">
      <h1 className="mt-3 mb-3 text-2xl font-bold text-center">
        Welcome Back Login
      </h1>

      <div className="flex flex-col  w-[80%] gap-4 flex-wrap mt-3 mb-3">
        <Input
          type="text"
          placeholder="Enter your email"
          // handler={setForm}
          handler={setInputField}
          value={form.email}
          field="email"
          className="w-full"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          // handler={setForm}
          handler={setInputField}
          value={form.password}
          field="password"
          className="w-full"
        />
      </div>

      <div>
        <Button title={"Login"} handler={submitHanlder} />
      </div>
    </div>
  );
};

export default Login;
