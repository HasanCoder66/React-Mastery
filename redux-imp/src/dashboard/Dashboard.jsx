import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/feature/authSlice/authSlice";
import { getTodos } from "../redux/feature/todoSlice/todoSlice";

const Dashboar = () => {
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector((state) => state.todo);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {todos.length > 0 && todos ? todos.map((i) => <li>{i.todo}</li>) : ""}
      {/* <button onClick={dispatch(logout())}>Logout</button> */}
    </div>
  );
};

export default Dashboar;
